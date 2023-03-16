import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learn redux", content: "Thats easy" },
  { id: "2", title: "Learn redux2", content: "Thats easy2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
