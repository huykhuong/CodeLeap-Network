import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetEditingPost,
  selectPostContent,
  selectPostId,
  selectPostTitle,
} from "../../redux/slice/editingPostSlice";
import styles from "./EditModal.module.css";
import { editPost } from "../../redux/slice/postSlice";
import { useEffect } from "react";

const EditModal = ({ setEditing }) => {
  const currentTitle = useSelector(selectPostTitle);
  const currentContent = useSelector(selectPostContent);

  const [newTitle, setNewTitle] = useState(currentTitle);
  const [newContent, setNewContent] = useState(currentContent);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!newTitle || !newContent) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [newTitle, newContent]);

  const dispatch = useDispatch();
  const id = useSelector(selectPostId);

  const editItem = () => {
    dispatch(editPost({ id: id, title: newTitle, content: newContent }));
    dispatch(resetEditingPost());
    document.body.style.overflow = "initial";
    setEditing(false);
  };

  //Save button styling classes
  const saveBtnDisabledStyle = `${isDisabled && styles.disabled}`;

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.message}>Edit item</p>
        <div className={styles.titleEditInput}>
          <label htmlFor="titleInput">Title</label>
          <input
            name="titleInput"
            id="titleInput"
            type="text"
            placeholder="Hello world"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className={styles.contentEditInput}>
          <label htmlFor="contentInput">Content</label>
          <textarea
            name="contentInput"
            id="contentInput"
            type="text"
            placeholder="Content here"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </div>
        <div className={styles.btn__group}>
          <button
            onClick={() => {
              setEditing(false);
              document.body.style.overflow = "initial";
            }}
          >
            Close
          </button>
          <button
            className={saveBtnDisabledStyle}
            disabled={isDisabled}
            onClick={() => editItem()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
