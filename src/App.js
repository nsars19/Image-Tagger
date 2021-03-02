import { useState } from "react";
import Modal from "./components/Modal/Modal";
import wave from "./assets/wave.png";
import waldo1 from "./assets/waldo1.jpeg";
import waldo2 from "./assets/waldo2.jpeg";
import waldo3 from "./assets/waldo3.jpeg";
import waldo4 from "./assets/waldo4.jpeg";
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image/Image";

const colors = {
  cream: "f9f7f7",
  gray: "dbe2ef",
  lightBlue: "3f72af",
  darkBlue: "112d4e",
};

const images = [
  { id: 1, src: waldo1 },
  { id: 2, src: waldo2 },
  { id: 3, src: waldo3 },
  { id: 4, src: waldo4 },
];

function App() {
  const [showModal, setModal] = useState(false);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);

  const toggleModal = () => setModal(!showModal);

  const handleClick = (e) => {
    console.log(e.target);
    setCursorPosition([e.clientX, e.clientY]);
    toggleModal();
  };

  return (
    <>
      <Navbar colors={colors}>
        <a href="localhost:3000">
          <img src={wave} alt="Waldo" />
        </a>
        <span>Restart</span>
        <span>Levels</span>
        <span>Highscores</span>
      </Navbar>
      <Modal
        colors={colors}
        showModal={showModal}
        toggleModal={toggleModal}
        cursorPosition={cursorPosition}
        checkGuess={checkGuess}
        foundChars={foundChars}
      />
      <Image
        src={currentImage.src}
        id={currentImage.id}
        alt="where's waldo?"
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
