import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  liked: [],
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
});

export default MovieSlice.reducer;
