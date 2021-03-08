import Navbar from "./Navbar/Navbar";
import Levels from "./Levels/Levels";

function LevelSelection(props) {
  const { colors, images, setCurrentImage, setImageID } = props;
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

export default LevelSelection;
