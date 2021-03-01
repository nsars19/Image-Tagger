import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  background: #${(props) => props.colors.lightBlue};
  color: #${(props) => props.colors.cream};

  span {
    padding: 5px 20px;
    border: 2px solid transparent;
    user-select: none;
  }
  span:last-child {
    margin-right: 5px;
  }

  span:hover {
    animation: growBorder 0.4s ease;
    border: 2px solid #${(props) => props.colors.cream};
  }

  span:active {
    color: #${(props) => props.colors.darkBlue};
  }

  @keyframes growBorder {
    from {
      border: 2px solid transparent;
    }
    to {
      border: 2px solid #${(props) => props.colors.cream};
    }
  }
`;

const Navbar = ({ children, colors }) => {
  return <StyledNavbar colors={colors}>{children}</StyledNavbar>;
};

export default Navbar;
