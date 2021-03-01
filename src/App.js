import { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal/Modal";
import waldo1 from "./waldo1.jpeg";

const StyledImg = styled.img`
  width: 100vw;
  background-repeat: no-repeat;
  background: center / contain no-repeat;
`;

function App() {
  const [showModal, setModal] = useState(false);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);

  const toggleModal = () => setModal(!showModal);

  return (
    <>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        cursorPosition={cursorPosition}
      />
      <StyledImg
        src={waldo1}
        alt="where's waldo?"
        onClick={(e) => {
          console.log({ x: e.clientX, y: e.clientY });
          setCursorPosition([e.clientX, e.clientY]);
          toggleModal();
        }}
      ></StyledImg>
    </>
  );
}

export default App;
