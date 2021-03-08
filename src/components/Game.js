import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Modal from "./Modal/Modal";
import Image from "./Image/Image";
import Form from "./Form/Form";

function Game(props) {
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [showModal, setModal] = useState(false);
  const [foundChars, setFoundChars] = useState([]);
  const [showFormModal, setFormModal] = useState(false);
  const [charLocations, setLocations] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [gameTime, setGameTime] = useState(null);

  const { colors, imageID, currentImage, setGameOver } = props;

  useEffect(() => {
    if (foundChars.length === 0) return;

    const chars = Object.keys(charLocations).filter((key) => key !== "id");

    if (foundChars.length === chars.length) {
      // Stop Timer when all are found

      setFormModal(!showFormModal);
      setGameTime((Date.now() - startTime) / 1000);
    }
  }, [foundChars]);

  const toggleModal = () => setModal(!showModal);

  const handleClick = (e) => {
    setCursorPosition([e.pageX, e.pageY]);
    toggleModal();
  };

  const checkGuess = ({ targetName, coords }) => {
    if (!targetName) return;

    const image = document.getElementById(imageID);
    const height = image.height;
    const width = image.width;

    // Guessed coordinates
    const [x, y] = coords;

    // Character location represented as a percentage of the width/height of the image
    const [xMinPc, xMaxPc] = charLocations[targetName].x;
    const [yMinPc, yMaxPc] = charLocations[targetName].y;

    // Convert percentage ranges to pixel values
    const [xMin, xMax] = [xMinPc, xMaxPc].map((pct) => pct * width);
    const [yMin, yMax] = [yMinPc, yMaxPc].map((pct) => pct * height);

    if (xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
      // If good guess add the character to the found characters collection
      // unless it has already been added
      if (!foundChars.includes(targetName)) {
        setFoundChars(foundChars.concat(targetName));
      }
    }
  };

  return (
    <>
      <Navbar colors={colors}>
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
        charLocations={charLocations}
      />
      <Image
        setStartTime={setStartTime}
        setLocations={setLocations}
        imageID={imageID}
        currentImage={currentImage}
        src={currentImage.src}
        id={currentImage.id}
        alt="where's waldo?"
        handleClick={handleClick}
      />
      <Form
        colors={colors}
        displayForm={showFormModal}
        gameTime={gameTime}
        imageID={imageID}
        setGameOver={setGameOver}
      />
    </>
  );
}

export default Game;
