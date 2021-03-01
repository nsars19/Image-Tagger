import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  background: center / contain no-repeat;
  padding: 15px;
  // padding-top: 0;
  display: flex;
  justify-content: center;
`;

const Image = ({ src, alt, handleClick }) => {
  return <StyledImage src={src} alt={alt} onClick={handleClick} />;
};

export default Image;
