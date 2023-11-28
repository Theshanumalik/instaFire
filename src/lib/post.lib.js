import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firbase";
export const createNewPost = async ({ caption, imageUrl, currentUser }) => {
  if (!currentUser?.uid) return;
  try {
    await addDoc(collection(db, "posts"), {
      caption,
      imageUrl,
      userId: currentUser.uid,
      username: currentUser.displayName,
      profilePhoto: currentUser.photoURL,
      likes: [],
      comments: [],
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getAllPosts = async () => {
//   await getDocs(collection(db, "todos")).then((querySnapshot) => {
//     const newData = querySnapshot.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     setTodos(newData);
//     console.log(todos, newData);
//   });
// };
