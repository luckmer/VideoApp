import { Navbar, NavItem, Container } from "reactstrap";
import { InputGroup, InputGroupAddon } from "reactstrap";
import PaginationPage from "../Pagination/Pagination";
import { Button, Form, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import Buttons from "../Button/Buttons";
import { ModalHook } from "./ModalHook";

const Modals = ({ pages }) => {
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, link, error } = ModalHook(dispatch);

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
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                placeholder={error.length > 0 ? error : "link"}
                onChange={handleChange}
                value={link}
              />
              <InputGroupAddon addonType="append">
                <Button style={{ cursor: "pointer" }} type="submit">
                  Submit
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </NavItem>
        <NavItem>
          <PaginationPage {...pages} />
        </NavItem>
        <NavItem>
          <Buttons />
        </NavItem>
      </Container>
    </Navbar>
  );
};

export default Modals;
