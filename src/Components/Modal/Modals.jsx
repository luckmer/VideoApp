import { useState } from "react";
import { Navbar, NavItem, Container } from "reactstrap";
import { fetchMovieById } from "../../reducers/MovieSlice";
import { InputGroup, InputGroupAddon } from "reactstrap";
import { Button, Form, Input } from "reactstrap";
import PaginationPage from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import Buttons from "../Button/Buttons";

const Modals = ({ pages }) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const CustomStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: " row wrap",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link.trim().length > 0 && link.trim() !== "") {
      const blocker = link.toString().match(/https:\/\/(:?www.)?(\w*)/);
      if (blocker !== null) {
        if (
          blocker[2] === "youtu" ||
          blocker[2] === "vimeo" ||
          blocker[2] === "youtube"
        ) {
          dispatch(fetchMovieById(link));
          setLink("");
          setError("");
        }
      }

      if (blocker === null) {
        setError("incorrect link");
        setLink("");
      }
    }
  };

  const handleChange = (e) => setLink(e.target.value);

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
