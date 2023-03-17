import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";

import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className='max-w-6xl mx-auto'>
      <h2>AddPostForm</h2>
      <form className='border border-black rounded flex flex-col px-20 py-6'>
        <label htmlFor='postTitle'>Post title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Post content:</label>
        <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
          <option value=''></option>
          {userOptions}
        </select>
        <label htmlFor='postContent'>Post content:</label>
        <input
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <button
          type='button'
          className='bg-blue-600 w-fit px-4 mt-6 cursor-pointer text-white hover:bg-blue-700'
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
