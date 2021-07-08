import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchApi from "../Api/FetchApi";

const initialState = {
  movies: [],
  liked: [],
};

const fetchMovieById = createAsyncThunk(
  "videos/addVideo",
  async (userId, { getState }) => {
    const data = typeof userId === "string" ? [userId] : userId;

    const DeleteCopy = data;
    const array = getState().movie.movies;

    let Unique = DeleteCopy.filter((id) => {
      const videoIds = array.map((video) => video.id);
      const duplicationExists = videoIds.some((videoId) =>
        id.includes(videoId)
      );
      return !duplicationExists;
    });

    return Promise.all(Unique.map((el) => FetchApi(el)));
  }
);

const MovieSlice = createSlice({
  name: "movie",
  initialState,

  reducers: {
    SetClearArray: (state, action) => {
      state.movies = [];
      state.liked = [];
    },
    SetLikedMovie: (state, action) => {
      const { like, color } = action.payload;
      if (color === "primary") {
        state.liked.push(like);
      }
      if (color === "danger") {
        const Result = state.liked.filter((item) => item !== like);
        state.liked = Result;
      }
    },

    SetDeleteMovie: (state, action) => {
      const { movie } = action.payload;
      const Update = state.movies.filter((item) => item.id !== movie);
      if (Update) state.movies = Update;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      const data = action.payload;
      const calculateArray = (arr) => {
        return arr.reduce(function (acc, currentVal) {
          return acc.concat(
            Array.isArray(currentVal) ? calculateArray(currentVal) : currentVal
          );
        }, []);
      };
      const State = calculateArray(data);
      state.movies.push(...State);
    });
  },
});

export { fetchMovieById };
export const { SetClearArray, SetLikedMovie, SetDeleteMovie } =
  MovieSlice.actions;
export default MovieSlice.reducer;
