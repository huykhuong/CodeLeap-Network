import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/MainScreen/Header";
import MainSection from "../components/MainScreen/MainSection";
import NewPostForm from "../components/MainScreen/NewPostForm";
import Post from "../components/MainScreen/Post";
import { selectPosts } from "../redux/slice/postSlice";
import { selectUsername } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/MainScreen/DeleteModal";
import { useState } from "react";
import EditModal from "../components/MainScreen/EditModal";

const MainScreen = () => {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);

  const posts = useSelector(selectPosts);
  const username = useSelector(selectUsername);
  const navigate = useNavigate();

  //useEffect
  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  }, [username]);

  //Reversing array to render posts from newest to oldest
  const sortedPostsArray = [...posts].reverse();

  return (
    <>
      <Header />
      <MainSection>
        <NewPostForm />
        {sortedPostsArray.map((post) => (
          <Post
            key={post.id}
            {...post}
            setDeleting={setDeleting}
            setEditing={setEditing}
          />
        ))}
      </MainSection>
      {deleting && <DeleteModal setDeleting={setDeleting} />}
      {editing && <EditModal setEditing={setEditing} />}
    </>
  );
};

export default MainScreen;
