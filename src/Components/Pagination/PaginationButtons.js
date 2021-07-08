import {
  Next,
  Prev,
  SetNumber,
  MaxPage,
  MinPage,
} from "../../reducers/PaginationSlice";
import { useDispatch, useSelector } from "react-redux";

const PaginationButton = (pageNumbers) => {
  const dispatch = useDispatch();

  let { page, limit, maxPage, minPage } = useSelector(
    (state) => state.PaginationSlice
  );

  const next = () => {
    if (pageNumbers.length > maxPage) {
      const update = (page += 1);
      dispatch(Next(update));

      if (page > maxPage) {
        dispatch(MaxPage(maxPage + limit));
        dispatch(MinPage(minPage + limit));
      }
    }
  };

  const prev = () => {
    if (page - 1 >= 1) {
      const update = (page -= 1);
      dispatch(Prev(update));
    }
    if (page >= 5) {
      dispatch(MaxPage(maxPage - limit));
      dispatch(MinPage(minPage - limit));
    }
  };

  const setNumber = (e) => dispatch(SetNumber(Number(e.target.value)));

  return { next, prev, setNumber };
};

export default PaginationButton;
