import CreatePost from "../components/CreatePost";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firbase";
import Posts from "../components/Posts";

const Feed = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (notesSnapshot) => {
      setPostsData(notesSnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <main className="px-1 min-h-[calc(100vh-70px-70px)] py-3">
      <div className="flex gap-2 h-full w-full max-w-container mx-auto px-1">
        <aside className="w-4/6 max-sm:w-full">
          <CreatePost />
          <Posts posts={postsData} />
        </aside>
        <aside className="bg-gray-600 shadow-md w-2/6 rounded-md p-2 self-start max-sm:hidden">
          <h1 className="my-2">InstaFire🚀</h1>
          <p>This Project is Built By theshanumalik</p>
        </aside>
      </div>
    </main>
  );
};

export default Feed;
