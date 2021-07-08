import { Container, Row } from "reactstrap";
import { Tile } from "./ApiHtml";
import ApiFunctionality from "./ApiFunctionality";

const ApiResult = ({ filterResult, setFilterResult, currentItems }) => {
  const { CustomStyle, likes, handleSave, handleDelete } =
    ApiFunctionality(setFilterResult);

  return (
    <Container>
      <Row style={CustomStyle}>
        {currentItems.map((el, i) => {
          const LikeColor = likes.includes(el.id) ? "danger" : "primary";
          return Tile(i, el, handleSave, LikeColor, handleDelete);
        })}
      </Row>
    </Container>
  );
};

export default ApiResult;
