import { Navbar, NavItem, Container } from "reactstrap";
import { Button, Form, Input } from "reactstrap";
import { InputGroup, InputGroupAddon } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Buttons from "./Buttons";

const Modals = () => {
  const CustomStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: " row wrap",
  };

  return (
    <Navbar color="dark">
      <Container style={CustomStyle}>
        <NavItem>
          <Form>
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="append">
                <Button style={{ cursor: "pointer" }}>Submit</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </NavItem>
        <NavItem>
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
        </NavItem>
        <NavItem>
          <Buttons />
        </NavItem>
      </Container>
    </Navbar>
  );
};

export default Modals;
