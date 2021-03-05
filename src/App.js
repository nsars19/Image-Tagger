import { useState, useEffect, useRef } from "react";
import Modal from "./components/Modal/Modal";
import waldo1 from "./assets/waldo1.jpeg";
import waldo2 from "./assets/waldo2.jpeg";
import waldo3 from "./assets/waldo3.jpeg";
import waldo4 from "./assets/waldo4.jpeg";
import waldo5 from "./assets/waldo5.jpg";
import waldo6 from "./assets/waldo6.jpg";
import Navbar from "./components/Navbar/Navbar";
import Image from "./components/Image/Image";
import Levels from "./components/Levels/Levels";

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
  { id: 5, src: waldo5 },
  { id: 6, src: waldo6 },
];

let locations = {
  id: 1,
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

function App() {
  const [showModal, setModal] = useState(false);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [currentImage, setCurrentImage] = useState(null);
  const [foundChars, setFoundChars] = useState([]);
  const [charLocations, setLocations] = useState(null);
  const [imageID, setImageID] = useState(null);

  // Get character location data when an image is selected
  // Initialize a ref object to hold value of the data
  const locationInfo = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      // assign current property the value of the returned promise
      locationInfo.current = await Promise.resolve(locations); // <-- Will be an API call
    };
    // Call the function and then set the data in state
    fetchData();
    setLocations(locationInfo.current);
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

  const handleClick = (e) => {
    setCursorPosition([e.pageX, e.pageY]);
    toggleModal();
  };

  if (currentImage) {
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
          src={currentImage.src}
          id={currentImage.id}
          alt="where's waldo?"
          handleClick={handleClick}
        />
      </>
    );
  } else {
    return (
      <>
        <Navbar colors={colors}>
          <span>Highscores</span>
        </Navbar>
        <Levels
          images={images}
          setCurrentImage={setCurrentImage}
          setImageID={setImageID}
          colors={colors}
        />
      </>
    );
  }
}

export default App;
