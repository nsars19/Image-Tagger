import Target from "./components/Target";
import Menu from "./components/Menu";
import styled from "styled-components";
import waldo from "./assets/waldo.png";
import odlaw from "./assets/odlaw.png";
import wiz from "./assets/wiz.png";

const StyledModal = styled.div`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  flex-direction: row;
  position: absolute;
  top: ${(props) => props.y - 30}px;
  left: ${(props) => props.x - 32}px;
`;

const characters = [
  { name: "Waldo", src: waldo, id: 1 },
  { name: "Odlaw", src: odlaw, id: 2 },
  { name: "Wizard", src: wiz, id: 3 },
];

const Modal = ({ showModal, toggleModal, cursorPosition, colors }) => {
  const [x, y] = cursorPosition;

  return (
    <StyledModal
      showModal={showModal}
      cursorPosition={cursorPosition}
      x={x}
      y={y}
    >
      <Target
        onClick={toggleModal}
        colors={colors}
        cursorPosition={cursorPosition}
      />
      <Menu
        colors={colors}
        toggleModal={toggleModal}
        cursorPosition={cursorPosition}
      >
        {characters.map(({ name, src, id }) => {
          return (
            <div id={name} key={id}>
              <img src={src} alt={name} />
              <p>{name}</p>
            </div>
          );
        })}
      </Menu>
    </StyledModal>
  );
};

export default Modal;
