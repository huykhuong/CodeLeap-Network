import React from "react";
import styles from "./Post.module.css";
import TimeAgo from "react-timeago";
import { useDispatch, useSelector } from "react-redux";
import { selectUsername } from "../../redux/slice/userSlice";
import { setEditingPost } from "../../redux/slice/editingPostSlice";

const Post = ({
  id,
  title,
  author,
  timestamp,
  content,
  setDeleting,
  setEditing,
}) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const openEditModal = () => {
    setEditing(true);
    document.body.style.overflow = "hidden";
    dispatch(setEditingPost({ id: id, title: title, content: content }));
  };

  const openDeleteModal = () => {
    setDeleting(true);
    document.body.style.overflow = "hidden";
    dispatch(setEditingPost({ id: id }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.post__header}>
        <p className={styles.post__title}>{title}</p>
        {author === username && (
          <div className={styles.icons__group}>
            {/* Delete Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              onClick={() => {
                openDeleteModal();
              }}
              style={{ cursor: "pointer" }}
            >
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
            </svg>

            {/* Edit Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              style={{ cursor: "pointer" }}
              onClick={() => openEditModal()}
            >
              {" "}
              <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
            </svg>
          </div>
        )}
      </div>
      <div className={styles.post__main_section}>
        <div className={styles.post__info}>
          <p className={styles.post__author}>@{author}</p>
          <p className={styles.post__timeago}>
            <TimeAgo date={timestamp} />
          </p>
        </div>
        <p className={styles.post__content}>{content}</p>
      </div>
    </div>
  );
};

export default Post;
