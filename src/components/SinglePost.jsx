import React from "react";

const SinglePost = ({ data }) => {
  return (
    <article className="my-2 bg-gray-600 flex flex-col gap-2 p-3 rounded-md">
      <div className="flex gap-2 items-center my-3">
        <img
          src={data.profilePhoto}
          className="w-[40px] h-[40px] rounded-full object-cover"
          alt=""
        />
        <h3>{data.username}</h3>
      </div>
      <hr className="bg-gray-500" />
      <p className="my-1">{data.caption}</p>
      <img src={data.imageUrl} className="max-h-[60vh] object-contain" alt="" />
    </article>
  );
};

export default SinglePost;
