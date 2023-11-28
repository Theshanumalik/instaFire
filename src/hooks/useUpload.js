import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firbase";

export default function useUpload() {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(false);
  const upload = (file) => {
    const uniqueName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, "posts/" + uniqueName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgresspercent(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (err) => {
        setError(true);
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          setError(false);
          setProgress(100);
        });
      }
    );
  };
  return { url, error, progress, upload };
}
