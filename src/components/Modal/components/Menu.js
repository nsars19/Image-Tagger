import styled from "styled-components";

const StyledMenu = styled.div`
  border: 3px solid #${(props) => props.colors.cream};
  background: #${(props) => (props.found ? props.colors.darkBlue : props.colors.cream)};
  color: #${(props) => props.colors.darkBlue};
  font-family: Arial, Courier;
  letter-spacing: 1px;
  // border-radius: 0 8px 8px 8px;
  border-radius: ${({ x, width }) => {
    return width - x < 162 ? "8px 0 0 8px" : "0 8px 8px 8px";
  }};
  user-select: none;

  & > div {
    padding: 8px 10px;
    border-bottom: 1px solid #${(props) => props.colors.gray};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  & div:first-child {
    border-radius: 0 5px 0 0;
  }

  & div:last-child {
    border-bottom: none;
  }

  & div:hover {
    transition: background 0.2s ease, color 0.3s ease;
    background: #${(props) => props.colors.gray};
    color: #${(props) => props.colors.darkBlue};
  }

  & div:active {
    background: #${(props) => props.colors.lightBlue};
    color: #${(props) => props.colors.cream};
  }

  img {
    padding-right: 8px;
    max-height: 24px;
  }
`;

function Menu({ children, colors, toggleModal, cursorPosition }) {
  const [x, y] = cursorPosition;

  const handleClick = (e) => {
    toggleModal();
    let targetName = e.target.id;

    if (!targetName) targetName = e.target.parentNode.id;
    console.log(targetName);
    console.log(e.target);
  };

  return (
    <StyledMenu
      colors={colors}
      onClick={handleClick}
      x={x}
      width={window.innerWidth}
    >
      {children}
    </StyledMenu>
  );
}

export default Menu;
