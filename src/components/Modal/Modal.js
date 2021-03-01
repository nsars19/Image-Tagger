import Target from "./components/Target";
import Menu from "./components/Menu";
import styled from "styled-components";
import waldo from "./assets/waldo.png";
import odlaw from "./assets/odlaw.png";
import wiz from "./assets/wiz.png";

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
      <Menu colors={colors} toggleModal={toggleModal}>
        <div>
          <img src={waldo} alt={"Waldo"} />
          <p>Waldo</p>
        </div>
        <div>
          <img src={odlaw} alt={"Odlaw"} />
          <p>Odlaw</p>
        </div>
        <div>
          <img src={wiz} alt={"Wizard"} />
          <p>Wizard</p>
        </div>
      </Menu>
    </StyledMenuModal>
  );
};

export default MenuModal;
