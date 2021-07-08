import { combineReducers } from "redux";
import MovieSlice from "./MovieSlice";
import ButtonSlice from "./ButtonSlice";
import PaginationSlice from "./PaginationSlice";

const Index = combineReducers({
  movie: MovieSlice,
  buttonPanel: ButtonSlice,
  PaginationSlice,
});

export default Index;
