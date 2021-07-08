import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
};

const ButtonSlice = createSlice({
  name: "buttonPanel",
  initialState,
  reducers: {
    setClickType: (state, action) => {},
  },
});

export default ButtonSlice.reducer;
