import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationPage = () => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink>&lt;</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink> &gt; </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationPage;
