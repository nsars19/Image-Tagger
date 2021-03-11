import styled from "styled-components";
import { useEffect } from "react";
import Loading from "./Loading/Loading";

const StyledImage = styled.img`
  max-width: 100%;
  background: center / contain no-repeat;
  display: flex;
  justify-content: center;
`;

const Image = (props) => {
  const {
    src,
    alt,
    handleClick,
    id,
    currentImage,
    imageID,
    setLocations,
    setStartTime,
    colors,
  } = props;
  // Get character location data when an image is selected
  // Initialize a ref object to hold value of the data
  // const locationInfo = useRef(null);
  useEffect(() => {
    (async function fetchData() {
      const URL = "https://serene-falls-76725.herokuapp.com";
      const res = await fetch(`${URL}/levels/${imageID}`);
      const data = await res.json();
      setLocations(data);
    })();
  }, [currentImage, imageID]);

  useEffect(() => {
    setStartTime(Date.now());
  }, [setStartTime]);

  return (
    (currentImage && (
      <StyledImage src={src} alt={alt} onClick={handleClick} id={id} />
    )) || <Loading colors={colors} />
  );
};

export default Image;
