import styled from "styled-components";
import { useEffect } from "react";

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
  } = props;
  // Get character location data when an image is selected
  // Initialize a ref object to hold value of the data
  // const locationInfo = useRef(null);
  useEffect(() => {
    (async function fetchData() {
      const res = await fetch(`http://localhost:3000/levels/${imageID}`);
      const data = await res.json();
      setLocations(data);
    })();
  }, [currentImage, imageID]);

  useEffect(() => {
    setStartTime(Date.now());
  }, [setStartTime]);

  return <StyledImage src={src} alt={alt} onClick={handleClick} id={id} />;
};

export default Image;
