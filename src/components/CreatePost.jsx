import { FaImage } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firbase";
import { createNewPost } from "../lib/post.lib";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    if (!file) return;
    const uniqueName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, "posts/" + uniqueName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (err) => {
        setError(true);
        setBusy(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log(
            await createNewPost({ caption, imageUrl: downloadURL, currentUser })
          );
          setBusy(false);
        });
      }
    );
  };
  return (
    <motion.form
      className="flex flex-col gap-2 bg-gray-600 shadow-md p-3 px-4 rounded-md"
      layout
      onSubmit={handleSubmit}
    >
      <h3 className="my-2 mx-3 text-xl">Create New Post</h3>
      <input
        type="text"
        className="bg-gray-700 p-3 px-4 rounded-full"
        placeholder="What's in your mind?"
        required
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="file"
        name="file"
        id="file"
        multiple={false}
        hidden
        onChange={(e) => setFile(e.target.files[0])}
      />
      <label
        htmlFor="file"
        className="mx-3 my-2 flex gap-2 items-center p-2 bg-gray-700 self-start rounded-md cursor-pointer"
      >
        <FaImage className="text-xl" />
        {file ? "Change Image" : "Select Image"}
      </label>
      {file && <motion.img src={URL.createObjectURL(file)} />}
      {file && caption.length > 0 && (
        <button
          type="submit"
          className="bg-blue-500 rounded-md p-2 transition-colors hover:bg-blue-600 py-3"
          disabled={busy}
        >
          {busy ? "Publishing..." : "🚀Publish "}
          {progress > 0 && progress}
        </button>
      )}
    </motion.form>
  );
};

export default CreatePost;
