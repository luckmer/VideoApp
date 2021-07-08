import { useState } from "react";
import { ButtonGroup, Button } from "reactstrap";

const Buttons = () => {
  const [name, setName] = useState([
    { id: 5, name: "new" },
    { id: 4, name: "favorite" },
    { id: 1, name: "row" },
    { id: 3, name: "demo" },
    { id: 2, name: "clear" },
  ]);

  const handleClick = () => {};

  return (
    <ButtonGroup>
      {name.map(({ id, name }) => {
        return (
          <Button key={id} color="primary" onClick={handleClick}>
            {name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default Buttons;
