import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ApiFunctionality from "./ApiFunctionality";
import { TileView, RowView } from "./ApiHtml";
import { Container, Row } from "reactstrap";
import { Button } from "reactstrap";

const ApiResult = ({ setFilterResult, currentItems }) => {
  const A = ApiFunctionality(setFilterResult);

  const {
    CustomStyle,
    likes,
    handleSave,
    handleDelete,
    type,
    modalData,
    CustomBody,
    handleSetupModal,
    toggle,
    modal,
  } = A;

  const state = type;

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Movie</ModalHeader>
        <ModalBody
          dangerouslySetInnerHTML={{
            __html: `${modalData.modal} `,
          }}
        />
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            close
          </Button>
        </ModalFooter>
      </Modal>
      <Container>
        <Row style={CustomStyle}>
          {currentItems.map((el, i) => {
            const LikeColor = likes.includes(el.id) ? "danger" : "primary";
            const PROPS = {
              i,
              handleSetupModal,
              el,
              handleSave,
              LikeColor,
              handleDelete,
              CustomBody,
            };

            return state === "tile"
              ? TileView({ ...PROPS })
              : RowView({ ...PROPS });
          })}
        </Row>
      </Container>
    </>
  );
};

export default ApiResult;
