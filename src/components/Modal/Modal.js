import Target from "./components/Target";
import Menu from "./components/Menu";
import styled from "styled-components";
import waldo from "./assets/waldo.png";
import odlaw from "./assets/odlaw.png";
import wiz from "./assets/wiz.png";
import wenda from "./assets/wenda.png";

const StyledModal = styled.div`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  flex-direction: ${({ width, x }) =>
    width - x < 162 ? "row-reverse" : "row"};
  position: absolute;
  top: ${({ y }) => y - 30}px;
  left: ${({ width, x }) => (width - x < 162 ? x - 143 : x - 32)}px;
`;

const charImages = {
  Waldo: {
    src: waldo,
    name: "Waldo",
    id: 1,
  },
  Odlaw: {
    src: odlaw,
    name: "Odlaw",
    id: 2,
  },
  Wenda: {
    src: wenda,
    name: "Wenda",
    id: 3,
  },
  Wizard: {
    src: wiz,
    name: "Wizard",
    id: 4,
  },
};

const mergeCharacterObjects = (charObj, mergeObj) => {
  const newObj = {};

  for (let charName in charObj) {
    if (charName === "id") {
      // Assign id to new object, but prevent following code from
      // being executed for the `id` property
      newObj.id = charObj[charName];
      continue;
    }

    // Set new object character info equal to original object character info
    newObj[charName] = charObj[charName];

    // Merge new properties into the new object eg. 'src', 'name', 'id'
    for (let newProp in mergeObj[charName]) {
      newObj[charName][newProp] = mergeObj[charName][newProp];
    }
  }

  return newObj;
};

const Modal = ({
  showModal,
  toggleModal,
  cursorPosition,
  colors,
  checkGuess,
  foundChars,
  charLocations,
}) => {
  const [x, y] = cursorPosition;
  const charInfo = mergeCharacterObjects(charLocations, charImages);

  return (
    <StyledModal
      showModal={showModal}
      cursorPosition={cursorPosition}
      x={x}
      y={y}
      width={window.innerWidth}
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
        checkGuess={checkGuess}
        foundChars={foundChars}
      >
        {[charInfo].map((obj) => {
          const elemArr = [];

          for (let prop in obj) {
            if (prop === "id") continue;

            const { name, id, src } = obj[prop];

            elemArr.push(
              <div id={name} key={id}>
                <img src={src} alt={name} />
                <p>{name}</p>
              </div>
            );
          }

          return elemArr;
        })}
      </Menu>
    </StyledModal>
  );
};

export default Modal;
