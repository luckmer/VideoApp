import { combineReducers } from "redux";
import MovieSlice from "./MovieSlice";

const Index = combineReducers({
  movie: MovieSlice,
});

export default Index;
