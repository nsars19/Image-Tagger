import styled from "styled-components";
import "animate.css";

const StyledLoading = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;

  .dot-wrap {
    height: 250px;
    width: 250px;
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    border-radius: 50%;
  }

  @keyframes rotate {
    to {
      transform: rotate(180deg) scale(0.5);
    }
  }

  .dot {
    height: 27px;
    width: 27px;
    background: #${({ colors }) => colors.lightBlue};
    color: #${({ colors }) => colors.cream};
    position: relative;
    border-radius: 50%;
    box-shadow: 0 0 4px #${({ colors }) => colors.lightBlue},
      0 0 7px #${({ colors }) => colors.lightBlue},
      0 0 9px #${({ colors }) => colors.lightBlue},
      0 0 12px #${({ colors }) => colors.lightBlue};
    text-shadow: 1px 1px 0px #222;
    font-size: 1.2rem;
    font-weight: bold;
    display: grid;
    place-items: center;
    animation-duration: 2s;
  }
`;

function Loading({ colors }) {
  return (
    <StyledLoading colors={colors}>
      <div className="dot-wrap ">
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          L
        </h2>
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          O
        </h2>
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          A
        </h2>
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          D
        </h2>
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          I
        </h2>
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          N
        </h2>
        <h2 className="dot animate__animated animate__flipOutY animate__infinite">
          G
        </h2>
      </div>
    </StyledLoading>
  );
}

export default Loading;
