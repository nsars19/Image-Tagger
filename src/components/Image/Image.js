import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  background: center / contain no-repeat;
  display: flex;
  justify-content: center;
`;

const Image = ({ src, alt, handleClick, id }) => {
  return <StyledImage src={src} alt={alt} onClick={handleClick} id={id} />;
};

export default Image;
