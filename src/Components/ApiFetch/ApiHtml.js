import CalcDate from "./CalcDate";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonGroup,
  Button,
  CardImg,
} from "reactstrap";

const RowView = ({
  i,
  CustomBody,
  handleSetupModal,
  el,
  handleSave,
  LikeColor,
  handleDelete,
}) => {
  return (
    <ListGroup key={i}>
      <ListGroupItem>
        <CardBody style={CustomBody}>
          <CardTitle
            tag="h5"
            onClick={() => handleSetupModal(el)}
            style={{ cursor: "pointer" }}
          >
            {el.title || el.name}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            <CalcDate date={el.published} />
          </CardSubtitle>
          <CardText>likes {el.likes}</CardText>
          <CardText>Views: {el.viewCount | 0}</CardText>
          <ButtonGroup>
            <Button href={el.link} color="primary">
              Play
            </Button>
            <Button
              onClick={() => handleSave(el.id, LikeColor)}
              color={LikeColor}
            >
              Save
            </Button>
            <Button color="primary" onClick={() => handleDelete(el.id)}>
              Delete
            </Button>
          </ButtonGroup>
        </CardBody>
      </ListGroupItem>
    </ListGroup>
  );
};

const TileView = ({
  i,
  handleSetupModal,
  el,
  handleSave,
  LikeColor,
  handleDelete,
}) => {
  return (
    <Card style={{ width: "21rem" }} key={i}>
      <CardImg
        onClick={() => handleSetupModal(el)}
        top
        style={{ cursor: "pointer" }}
        src={el.pictures}
        alt={el.pictures}
      />
      <CardBody>
        <CardTitle tag="h5">{el.title || el.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          <CalcDate date={el.published} />
        </CardSubtitle>
        <CardText>likes {el.likes}</CardText>
        <CardText>Views: {el.viewCount | 0}</CardText>
        <ButtonGroup>
          <Button href={el.link} color="primary">
            Play
          </Button>
          <Button
            onClick={() => handleSave(el.id, LikeColor)}
            color={LikeColor}
          >
            Save
          </Button>
          <Button color="primary" onClick={() => handleDelete(el.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export { TileView, RowView };
