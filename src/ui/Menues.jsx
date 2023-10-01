import { createContext, useContext, useState } from "react";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenuesContext = createContext();

const StyledMenues = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease 0s;
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`;
const StyledOptions = styled.div`
  position: absolute;
  margin-top: 3.3rem;

  width: 19rem;
  background-color: var(--color-grey-0);
  backdrop-filter: var(--backdrop-color);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;

  overflow: visible;
  z-index: 100;
`;
const StyledOption = styled.button`
  background-color: var(--color-grey-0);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.3rem 2.3rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-400);
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function Menues({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <MenuesContext.Provider value={{ isOpen, close, open, toggle }}>
      <StyledMenues>{children}</StyledMenues>
    </MenuesContext.Provider>
  );
}

function Menu() {
  const { toggle } = useContext(MenuesContext);

  function handleToggle() {
    toggle();
  }
  return (
    <MenuButton onClick={handleToggle}>
      <HiMiniEllipsisVertical />
    </MenuButton>
  );
}
function Options({ children }) {
  const { isOpen, close } = useContext(MenuesContext);
  const ref = useOutsideClick(close);
  if (isOpen === false) return;

  return <StyledOptions ref={ref}>{children}</StyledOptions>;
}
function Option({ children, onClick }) {
  return <StyledOption onClick={onClick}>{children}</StyledOption>;
}

Menues.Menu = Menu;
Menues.Options = Options;
Menues.Option = Option;
export default Menues;
