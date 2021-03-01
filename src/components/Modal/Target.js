import styled from "styled-components";

const StyledTarget = styled.div`
  height: 60px;
  width: 60px;
  border: 3px solid #4a4a4a;
  border-right: none;
  background: #fff3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px 0 0 14px;
  animation: grow 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  @keyframes grow {
    0% {
      height: 0px;
      width: 0px;
    }
    // 50% {
    //   height: 66px;
    //   width: 66px;
    // }
    100% {
      height: 60px;
      width: 60px;
    }
  }

  span {
    height: 2px;
    width: 10px;
    background: #4a4a4a;
    position: absolute;
    transform: rotate(45deg);
  }

  span:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

function Target({ onClick }) {
  return (
    <StyledTarget onClick={onClick}>
      <span></span>
      <span></span>
    </StyledTarget>
  );
}

export default Target;
