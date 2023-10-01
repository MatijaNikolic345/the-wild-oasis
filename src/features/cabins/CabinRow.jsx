import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Menues from "../../ui/Menues";
import { HiDocumentDuplicate, HiPencil, HiTrash } from "react-icons/hi2";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import EditCabinForm from "./EditCabinForm";
import Modal from "../../ui/Modal";

const StyledCabinRow = styled.div`
  height: 7rem;
  display: grid;
  position: relative;
  grid-template-columns: 0.7fr 1.8fr 2.2fr 1fr 1fr 1fr;
  gap: 3.5rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  font-size: 1.4rem;
  align-items: center;
  padding-bottom: 0.4rem;
  border-top: 1px solid var(--color-grey-100);
  &:first-of-type {
    padding-top: 0.4rem;
  }
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center center;
  transform: scale(1.5) translateX(11px);
`;
const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: Sono;
`;
const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: Sono;
`;
const Discount = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: Sono;
  color: var(--color-green-700);
`;
function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, id, description } =
    cabin;

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin } = useCreateCabin();
  function handleDeleteCabin() {
    deleteCabin(id);
  }
  function handleDuplicateCabin() {
    const newCabin = {
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    };
    createCabin(newCabin);
  }
  return (
    <>
      <StyledCabinRow>
        <Img src={image} />
        <Text>{name}</Text>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>
          {discount === 0 ? (
            <span>&mdash;&mdash;</span>
          ) : (
            formatCurrency(discount)
          )}
        </Discount>
        <Menues>
          <Menues.Menu></Menues.Menu>
          <Menues.Options>
            <Menues.Option onClick={handleDuplicateCabin}>
              <HiDocumentDuplicate></HiDocumentDuplicate>
              <span>Duplicate</span>
            </Menues.Option>
            <Menues.Option
              onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
            >
              <HiPencil></HiPencil>
              <span>Edit</span>
            </Menues.Option>
            <Menues.Option
              onClick={() =>
                setConfirmDelete((confirmDelete) => !confirmDelete)
              }
            >
              <HiTrash></HiTrash>
              <span>Delete</span>
            </Menues.Option>
          </Menues.Options>
        </Menues>
      </StyledCabinRow>
      {confirmDelete && (
        <ConfirmDelete
          confirmDelete={confirmDelete}
          setConfirmDelete={setConfirmDelete}
          isDeleting={isDeleting}
          handleDelete={handleDeleteCabin}
        ></ConfirmDelete>
      )}
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <Modal.Window>
            <EditCabinForm cabin={cabin} />
          </Modal.Window>
        </Modal>
      )}
    </>
  );
}

export default CabinRow;
