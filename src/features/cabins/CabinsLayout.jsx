import styled from "styled-components";
import CabinsHeading from "./CabinsHeading";
import CabinsTable from "./CabinsTable";

import Button from "../../ui/Button";
import { useState } from "react";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import CreateCabinForm from "./CreateCabinForm";

const StyledCabinsLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

function CabinsLayout() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <StyledCabinsLayout>
      <Row type="vertical">
        <CabinsHeading />
        <Row type="vertical">
          <CabinsTable />
        </Row>
        <Row>
          <Button onClick={() => setIsOpenModal((isOpen) => !isOpen)}>
            Add new cabin
          </Button>
        </Row>
        {isOpenModal && (
          <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
            <Modal.Window>
              <CreateCabinForm />
            </Modal.Window>
          </Modal>
        )}
      </Row>
    </StyledCabinsLayout>
  );
}

export default CabinsLayout;
