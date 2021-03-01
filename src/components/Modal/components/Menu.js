import styled from "styled-components";

const StyledMenu = styled.div`
  border: 3px solid #${(props) => props.colors.cream};
  background: #${(props) => (props.found ? props.colors.darkBlue : props.colors.cream)};
  color: #${(props) => props.colors.darkBlue};
  font-family: Arial, Courier;
  letter-spacing: 1px;
  border-radius: 0 8px 8px 8px;

  & > div {
    width: 130px;
    padding: 8px 10px;
    border-bottom: 1px solid #${(props) => props.colors.gray};
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
`;

function Menu({ children, colors, toggleModal }) {
  const handleClick = (e) => {
    console.log(e.target.innerText);
    toggleModal();
  };

  return (
    <StyledMenu colors={colors} onClick={handleClick}>
      {children}
    </StyledMenu>
  );
}

export default Menu;
