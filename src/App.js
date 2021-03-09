import { useState } from "react";
import waldo1 from "./assets/waldo1.jpeg";
import waldo2 from "./assets/waldo2.jpeg";
import waldo3 from "./assets/waldo3.jpeg";
import waldo4 from "./assets/waldo4.jpeg";
import waldo5 from "./assets/waldo5.jpg";
import waldo6 from "./assets/waldo6.jpg";
import Scores from "./components/Scores";
import Game from "./components/Game";
import LevelSelection from "./components/LevelSelection";

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

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [imageID, setImageID] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  if (gameOver) {
    return (
      <Scores
        colors={colors}
        images={images}
        setCurrentImage={setCurrentImage}
        setImageID={setImageID}
        imageID={imageID}
        setGameOver={setGameOver}
        highScoreStyle
      />
    );
  } else if (currentImage) {
    return (
      <Game
        colors={colors}
        currentImage={currentImage}
        imageID={imageID}
        setGameOver={setGameOver}
      />
    );
  } else {
    return (
      <LevelSelection
        colors={colors}
        images={images}
        setCurrentImage={setCurrentImage}
        setImageID={setImageID}
        setGameOver={setGameOver}
      />
    );
  }
}

export default App;
