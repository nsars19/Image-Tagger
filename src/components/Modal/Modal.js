import Target from "./Target";
import Menu from "./Menu";
import styled from "styled-components";

const StyledMenuModal = styled.div`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  flex-direction: row;
  position: absolute;
  top: ${(props) => props.y - 30}px;
  left: ${(props) => props.x - 32}px;
`;

const MenuModal = ({ showModal, toggleModal, cursorPosition, colors }) => {
  const [x, y] = cursorPosition;

  return (
    <StyledMenuModal
      showModal={showModal}
      cursorPosition={cursorPosition}
      x={x}
      y={y}
    >
      <Target onClick={toggleModal} colors={colors} />
      <Menu colors={colors}>
        <div>Waldo</div>
        <div>Odlaw</div>
        <div>Wizard</div>
      </Menu>
    </StyledMenuModal>
  );
};

export default MenuModal;
