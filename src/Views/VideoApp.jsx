import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { NavBar, Modals, ApiResult } from "../Components";

const VideoApp = () => {
  let { page, limit } = useSelector((state) => state.PaginationSlice);
  const [filterResult, setFilterResult] = useState([]);
  const pageNumbers = [];

  const length = page * limit;
  const indexOfFirstItem = length - limit;
  const currentItems = filterResult.slice(indexOfFirstItem, length);

  const PageLength = Math.ceil(filterResult.length / limit);
  for (let i = 1; i <= PageLength; i++) {
    pageNumbers.push(i);
  }

  const PAGINATION = { pageNumbers };
  const PROPS = { filterResult, setFilterResult, currentItems };

  return (
    <Fragment>
      <NavBar />
      <Modals pages={PAGINATION} />
      <ApiResult {...PROPS} />
    </Fragment>
  );
};

export default VideoApp;
