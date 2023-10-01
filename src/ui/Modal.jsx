import { createContext, useContext } from "react";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import CloseButton from "./CloseButton";
import { HiXMark } from "react-icons/hi2";
const ModalContext = createContext();

const StyledModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s ease 0s;
`;
const StyledModal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s ease 0s;
`;

function Modal({ children, setIsOpenModal, setConfirmDelete }) {
  const currentSet = setIsOpenModal ? setIsOpenModal : setConfirmDelete;
  const close = () => currentSet(false);
  return (
    <ModalContext.Provider value={{ close }}>
      <StyledModal>{children}</StyledModal>
    </ModalContext.Provider>
  );
}
function ModalWindow({ children }) {
  const { close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  return (
    <StyledModalWindow ref={ref}>
      <CloseButton onClick={close}>
        <HiXMark />
      </CloseButton>
      {children}
    </StyledModalWindow>
  );
}
Modal.Window = ModalWindow;

export default Modal;

export { ModalContext };
