import styled from "styled-components";

const StyledLevels = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;

  div {
    width: fit-content;
    border-radius: 5px;
    margin: 15px 15px 0px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  div:first-child {
    margin-top: 25px;
  }

  div:last-child {
    margin-bottom: 15px;
  }

  div:hover,
  div:active {
    box-shadow: 1px 1px 2px #${({ colors }) => colors.gray};
  }

  img {
    max-width: 100%;
  }

  h3 {
    font-weight: 400;
    padding: 12px;
  }

  @media (max-width: 767.99px) {
    & {
      grid-template-rows: repeat(auto-fit, minmax(1fr, 150px));
      width: 98%;
    }
  }
  @media (min-width: 768px) {
    & {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    & {
      width: 85%;
    }
  }
  @media (min-width: 1440px) {
    & {
      width: 75%;
    }
  }
  @media (min-width: 1700px) {
    & {
      width: 65%;
    }
    div:nth-child(2) {
      margin-top: 25px;
    }
    div:nth-child(3) {
      margin-bottom: 15px;
    }
  }
`;

const Levels = ({ setCurrentImage, images, colors }) => {
  return (
    <StyledLevels colors={colors}>
      {images.map((img) => (
        <div key={img.id} onClick={() => setCurrentImage(img)}>
          <img src={img.src} alt={"Where's Waldo?"} />
          <h3>Level {img.id}</h3>
        </div>
      ))}
    </StyledLevels>
  );
};

export default Levels;