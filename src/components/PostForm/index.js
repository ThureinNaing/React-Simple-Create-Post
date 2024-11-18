import React, { useState } from "react";
import "./index.css";

export default function Index({ addPost }) {
  // select form
  let [status, setStatus] = useState("upcoming");

  let [title, setTitle] = useState("");
  let resetForm = () => {
    setTitle("");
  };
  // upload post
  let uploadPost = (e) => {
    e.preventDefault();
    console.log("hello there");
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      status: status,
    };
    addPost(post);
    resetForm();
  };
  return (
    <form className="post-form">
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input
          type="text "
          placeholder="Enter your text here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
      </div>
      <div className="form-control">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="dropped">Dropped</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      <div className="form-control">
        <button type="submit" onClick={uploadPost}>
          Post now
        </button>
      </div>
    </form>
  );
}
