import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonGroup,
  Button,
  CardImg,
} from "reactstrap";

const ApiResult = () => {
  const state = useSelector((state) => state.movie.movies);

  const CustomStyle = {
    display: "flex",
    paddingTop: "20px",
    justifyContent: "center",
  };

  return (
    <Container>
      <Row style={CustomStyle}>
        {state.map((el, i) => (
          <Card style={{ width: "21rem" }} key={i}>
            <CardImg
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
                <Button>Save</Button>
                <Button color="primary">Delete</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ApiResult;

const CalcDate = (data) => {
  const Data = new Date(data.date.toString());
  const Result = `${Data.getDate()}-${
    Data.getMonth() + 1
  }-${Data.getFullYear()}`;

  return `${Result}`;
};
