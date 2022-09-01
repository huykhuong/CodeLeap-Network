import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import postReducer from "../slice/postSlice";
import editingPostReducer from "../slice/editingPostSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    editingPost: editingPostReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
