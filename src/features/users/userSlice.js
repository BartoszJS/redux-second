import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "First dude" },
  { id: "1", name: "Second dude" },
  { id: "2", name: "Third dude" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
