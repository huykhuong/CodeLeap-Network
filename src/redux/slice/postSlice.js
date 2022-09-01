import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [
        ...state.posts,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
          timestamp: action.payload.timestamp,
          content: action.payload.content,
        },
      ];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    editPost: (state, action) => {
      const indexOfPost = state.posts.findIndex(
        (post) => action.payload.id === post.id
      );
      if (action.payload.title !== null && action.payload.content !== null) {
        state.posts[indexOfPost] = {
          ...state.posts[indexOfPost],
          title: action.payload.title,
          content: action.payload.content,
        };
      }
    },
  },
});

export const { addPost, deletePost, editPost } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
