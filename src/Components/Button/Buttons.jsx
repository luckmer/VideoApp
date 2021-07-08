import { ButtonGroup, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../reducers/MovieSlice";
import { SetFilterType, setClickType } from "../../reducers/ButtonSlice";
import { SetClearArray } from "../../reducers/MovieSlice";
import Demo from "../../hooks/Examples";

const Buttons = () => {
  const buttons = [
    { id: 5, name: "new" },
    { id: 4, name: "favorite" },
    { id: 1, name: "row" },
    { id: 3, name: "demo" },
    { id: 2, name: "clear" },
  ];

  const dispatch = useDispatch();
  const state = useSelector((state) => state.buttonPanel.filterType);

  const handleClick = (target, color) => {
    if (target === "demo") dispatch(fetchMovieById(Demo()));
    if (target === "clear") dispatch(SetClearArray());
    if (target === "row") dispatch(setClickType({ view: target }));
    dispatch(SetFilterType({ type: target, color: color }));
  };

  const CustomStyle = {
    display: "flex",
    alignItems: "center",
    flexFlow: " row wrap",
  };

  return (
    <ButtonGroup style={CustomStyle}>
      {buttons.map(({ id, name }) => {
        const Color =
          state.favorite === name
            ? "danger"
            : state.data === name
            ? "danger"
            : state.row === name
            ? "danger"
            : name === "tile"
            ? "danger"
            : "primary";

        return (
          <Button
            key={id}
            color={Color}
            onClick={() => handleClick(name, Color)}
          >
            {name}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default Buttons;
