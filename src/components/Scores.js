import Navbar from "./Navbar/Navbar";
import Levels from "./Levels/Levels";
import HighScore from "./HighScore/HighScore";

function Scores(props) {
  const {
    colors,
    images,
    setCurrentImage,
    setImageID,
    imageID,
    setGameOver,
  } = props;

  return (
    <>
      <Navbar colors={colors}>
        <span>Restart</span>
        <span>Levels</span>
      </Navbar>
      <Levels
        images={images}
        setCurrentImage={setCurrentImage}
        setImageID={setImageID}
        colors={colors}
        imageID={imageID}
        highScoreStyle
      />
      <HighScore imageID={imageID} colors={colors} setGameOver={setGameOver} />
    </>
  );
}

export default Scores;
