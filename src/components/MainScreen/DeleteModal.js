import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DeleteModal.module.css";
import { deletePost } from "../../redux/slice/postSlice";
import {
  resetEditingPost,
  selectPostId,
} from "../../redux/slice/editingPostSlice";

const DeleteModal = ({ setDeleting }) => {
  const dispatch = useDispatch();
  const id = useSelector(selectPostId);

  const deleteItem = () => {
    dispatch(deletePost({ id }));
    dispatch(resetEditingPost());
    document.body.style.overflow = "initial";
    setDeleting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.message}>
          Are you sure you want to delete this item?
        </p>
        <div className={styles.btn__group}>
          <button
            onClick={() => {
              setDeleting(false);
              document.body.style.overflow = "initial";
            }}
          >
            Cancel
          </button>
          <button onClick={() => deleteItem()}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
