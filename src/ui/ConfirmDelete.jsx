import styled from "styled-components";
import Modal from "./Modal";
import ButtonCancel from "./ButtonCancel";
import ButtonDelete from "./ButtonDelete";

const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40rem;
`;
const Heading = styled.h3`
  color: var(--color-grey-700);
  font-size: 2rem;
  font-weight: 500;
`;
const Text = styled.p`
  color: var(--color-grey-500);
  font-size: 1.6rem;
  font-weight: 400;
`;
const Buttons = styled.div`
  margin-top: 1.7rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
`;

function ConfirmDelete({
  confirmDelete,
  setConfirmDelete,
  isDeleting,
  handleDelete,
}) {
  return (
    <Modal confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}>
      <Modal.Window>
        <StyledConfirmDelete>
          <Heading>Delete cabin</Heading>
          <Text>
            Are you sure you want to delete this cabin permanently? This action
            cannot be undone.
          </Text>
          <Buttons>
            <ButtonCancel disabled={isDeleting}>Cancel</ButtonCancel>
            <ButtonDelete disabled={isDeleting} onClick={handleDelete}>
              Delete
            </ButtonDelete>
          </Buttons>
        </StyledConfirmDelete>
      </Modal.Window>
    </Modal>
  );
}

export default ConfirmDelete;
