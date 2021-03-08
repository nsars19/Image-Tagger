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
    // background: ${({ hs, colors }) => (hs ? "#" + colors.gray : "inherit")};
  }

  div:first-child {
    ${({ hs }) => (hs ? "margin-top: 15px" : "margin-top: 25px")};
  }

  div:last-child {
    ${({ hs }) => (hs ? "margin-bottom: 0px" : "margin-bottom: 15px")};
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
    div:nth-child(2) {
      ${({ hs }) => (hs ? "margin-top: 15px" : "margin-top: 25px")};
    }
    div:nth-child(5) {
      ${({ hs }) => (hs ? "margin-bottom: 0px" : "margin-bottom: 15px")};
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
  }
`;

const Levels = (props) => {
  const {
    setCurrentImage,
    setImageID,
    images,
    colors,
    highScoreStyle,
    imageID,
  } = props;

  return (
    <StyledLevels
      colors={colors}
      hs={highScoreStyle}
      style={
        highScoreStyle
          ? {
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0px, 1fr)",
            }
          : {}
      }
    >
      {images.map((img, idx) => (
        <div
          key={img.id}
          onClick={() => {
            setCurrentImage(img);
            setImageID(img.id);
          }}
          style={{
            backgroundColor:
              imageID === idx + 1 ? "#" + colors.lightBlue : "inherit",
            color: imageID === idx + 1 ? "#" + colors.cream : "inherit",
          }}
        >
          <img src={img.src} alt={"Where's Waldo?"} />
          <h3>Level {img.id}</h3>
        </div>
      ))}
    </StyledLevels>
  );
};

export default Levels;
