import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useSelector } from "react-redux";
import PaginationButton from "./PaginationButtons";

const PaginationPage = ({ pageNumbers }) => {
  let { page, maxPage, minPage } = useSelector(
    (state) => state.PaginationSlice
  );

  const { next, prev, setNumber } = PaginationButton(pageNumbers);

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink onClick={() => prev()}>&lt;</PaginationLink>
      </PaginationItem>
      {pageNumbers.map((number) => {
        if (number < maxPage + 1 && number > minPage) {
          return (
            <PaginationItem
              key={number}
              active={page === number ? true : false}
            >
              <PaginationLink onClick={setNumber} value={number}>
                {number}
              </PaginationLink>
            </PaginationItem>
          );
        }
        return "";
      })}
      <PaginationItem>
        <PaginationLink onClick={() => next()}> &gt; </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationPage;
