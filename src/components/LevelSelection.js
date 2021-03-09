import Navbar from "./Navbar/Navbar";
import Levels from "./Levels/Levels";

function LevelSelection(props) {
  const { colors, images, setCurrentImage, setImageID, setGameOver } = props;
  return (
    <>
      <Navbar colors={colors}>
        <span
          onClick={() => {
            setCurrentImage(images[0]);
            setImageID(images[0].id);
            setGameOver(true);
          }}
        >
          Highscores
        </span>
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

export default LevelSelection;
