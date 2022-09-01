import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/slice/postSlice";
import { selectUsername } from "../../redux/slice/userSlice";
import styles from "./NewPostForm.module.css";

const NewPostForm = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  // useEffect
  useEffect(() => {
    if (title !== "" && content !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content]);

  //Button styling classes
  const buttonClasses = `${styles.create__button} ${
    isDisabled && styles.disabled
  }`;

  const handleSubmit = () => {
    const newPost = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: title,
      author: username,
      content: content,
      timestamp: Date.now(),
    };

    dispatch(addPost(newPost));
    setTitle("");
    setContent("");
  };

  return (
    <div className={styles.form__container}>
      <h2 className={styles.form__header}>
        Hello {username}, What is on your mind?
      </h2>
      <label className={styles.title__label} htmlFor="title">
        Title
      </label>
      <input
        className={styles.title}
        type="text"
        id="title"
        name="title"
        placeholder="Hello world"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className={styles.content__label} htmlFor="content">
        Content
      </label>
      <textarea
        className={styles.content}
        type="text"
        id="content"
        name="content"
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className={buttonClasses}
      >
        create
      </button>
    </div>
  );
};

export default NewPostForm;
