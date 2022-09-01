import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  title: null,
  content: null,
};

const editingPostSlice = createSlice({
  name: "editingPost",
  initialState,
  reducers: {
    setEditingPost: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    resetEditingPost: (state) => {
      state.id = null;
      state.title = null;
      state.content = null;
    },
  },
});

export const { setEditingPost, resetEditingPost } = editingPostSlice.actions;

export const selectPostId = (state) => state.editingPost.id;
export const selectPostTitle = (state) => state.editingPost.title;
export const selectPostContent = (state) => state.editingPost.content;

export default editingPostSlice.reducer;
