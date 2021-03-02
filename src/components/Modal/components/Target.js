import styled from "styled-components";

const StyledTarget = styled.div`
  height: 60px;
  width: 60px;
  border: 3px solid #${(props) => props.colors.cream};
  border-right: ${({ x, width, colors }) => {
    return width - x < 162 ? "3px solid" + colors.cream : "none";
  }};
  border-left: ${({ x, width, colors }) => {
    return width - x < 162 ? "none" : "3px solid" + colors.cream;
  }};
  background: #${(props) => props.colors.lightBlue}44;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ x, width }) => {
    return width - x < 162 ? "0 8px 8px 0" : "8px 0 0 8px";
  }};
  animation: grow 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  @keyframes grow {
    0% {
      height: 0px;
      width: 0px;
    }
    100% {
      height: 60px;
      width: 60px;
    }
  }

  span {
    height: 2px;
    width: 10px;
    background: #${(props) => props.colors.darkBlue};
    position: absolute;
    transform: rotate(45deg);
  }

  span:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

function Target({ onClick, colors, cursorPosition }) {
  const [x, y] = cursorPosition;
  return (
    <StyledTarget
      colors={colors}
      onClick={onClick}
      x={x}
      width={window.innerWidth}
    >
      <span></span>
      <span></span>
    </StyledTarget>
  );
}

export default Target;
