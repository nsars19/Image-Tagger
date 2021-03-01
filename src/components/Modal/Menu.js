import styled from "styled-components";

const StyledMenu = styled.div`
  border: 3px solid #${(props) => props.colors.cream};
  background: #${(props) => (props.found ? props.colors.darkBlue : props.colors.lightBlue)};
  color: #${(props) => props.colors.cream};
  font-family: Arial, Courier;
  letter-spacing: 1px;
  border-radius: 0 8px 8px 8px;

  & > div {
    padding: 6px 10px;
    border-bottom: 1px solid #${(props) => props.colors.cream};
  }
  & div:last-child {
    border-bottom: none;
  }
`;

function Menu({ children, colors }) {
  const handleClick = (e) => console.log(e.target.innerText);

  return (
    <StyledMenu colors={colors} onClick={handleClick}>
      {children}
    </StyledMenu>
  );
}

export default Menu;
