import styled from "styled-components";

const StyledMenu = styled.div`
  border: 3px solid #4a4a4a;
  background: ${(props) => (props.found ? "blue" : "#eee")};
  color: ${(props) => (props.found ? "blue" : "#393e46")};
  font-family: Arial, Courier;
  letter-spacing: 1px;
  border-radius: 0 14px 14px 14px;

  & > div {
    padding: 6px 10px;
    border-bottom: 1px solid #4a4a4a;
  }
  & div:last-child {
    border-bottom: none;
  }
`;

function Menu({ children }) {
  const handleClick = (e) => console.log(e.target.innerText);

  return <StyledMenu onClick={handleClick}>{children}</StyledMenu>;
}

export default Menu;
