import { useState, useEffect } from "react";
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
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [foundChars, setFoundChars] = useState([]);
  let locations = {
    Waldo: {
      x: [0.407, 0.432],
      y: [0.164, 0.218],
    },
    Odlaw: {
      x: [0.123, 0.182],
      y: [0.122, 0.321],
    },
    Wizard: {
      x: [0.613, 0.825],
      y: [0.718, 0.888],
    },
  };

  useEffect(() => {
    // Get locations of characters by percentage
    // const res = await fetch(api)
    // const data = await res.json()
  }, [currentImage]);

  useEffect(() => {
    for (let charName of foundChars) {
      const menuElem = document.getElementById(charName);
      menuElem.style.background = `#${colors.gray}88`;
      menuElem.style.color = `#${colors.gray}`;
      menuElem.style.filter = "grayscale(70%)";
    }
  });

  const toggleModal = () => setModal(!showModal);

  const checkGuess = ({ targetName, coords }) => {
    if (!targetName) return;

    const height = document.getElementById(currentImage.id).height;
    const width = document.getElementById(currentImage.id).width;

    // Guessed coordinates
    const [x, y] = coords;

    // Character location represented as a percentage of the width/height of the image
    const [xMinPc, xMaxPc] = locations[targetName].x;
    const [yMinPc, yMaxPc] = locations[targetName].y;

    // Convert percentage ranges to pixel values
    const [xMin, xMax] = [xMinPc, xMaxPc].map((pct) => pct * width);
    const [yMin, yMax] = [yMinPc, yMaxPc].map((pct) => pct * height);

    console.log(x, y, { xMin, xMax, yMin, yMax });
    if (xMin <= x && x <= xMax && yMin <= y && y <= yMax) {
      // If good guess add the character to the found characters collection
      // unless it has already been added
      if (!foundChars.includes(targetName)) {
        setFoundChars(foundChars.concat(targetName));
      }
    }
  };

  const handleClick = (e) => {
    setCursorPosition([e.pageX, e.pageY]);
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
