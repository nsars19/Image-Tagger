import styled from "styled-components";

const StyledForm = styled.div`
  display: ${({ displayForm }) => (displayForm ? "flex" : "none")};
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background: #${({ colors }) => colors.lightBlue};
  color: #${({ colors }) => colors.cream};
  width: 350px;
  position: absolute;
  top: 30vh;
  left: calc(50% - 175px);

  input[type="text"] {
    font-size: 14px;
    height: 35px;
    padding: 5px;
    border-style: none;
    border-radius: 4px;
    // box-shadow: 1px 1px 2px #${({ colors }) => colors.lightBlue};
    margin: 15px 0;
  }

  input[type="submit"] {
    border-style: none;
    padding: 15px 10px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    background: #${({ colors }) => colors.gray};

    &:hover {
      transition: background 0.05s ease, color 0.05s ease;
      background: #${({ colors }) => colors.darkBlue};
      color: #${({ colors }) => colors.cream};
    }
  }

  & div > *:not(div) {
    z-index: 10;
  }
`;

function Form(props) {
  const { colors, displayForm, gameTime, imageID, setGameOver } = props;

  const handleSubmit = async (e) => {
    const name = "nick";
    const url = "http://localhost:3000/highscores";
    const params = `?name=${name}&time=${gameTime}&level_id=${imageID}`;
    const fullUrl = url + params;
    await fetch(fullUrl, { method: "post" });
    setGameOver(true);
  };

  return (
    <StyledForm colors={colors} displayForm={displayForm}>
      <p>You finished in {gameTime}s</p>
      <input type={"text"} placeholder={"your name here"} min={2} max={24} />
      <input
        type={"submit"}
        value={"Submit your score!"}
        onClick={handleSubmit}
      />
    </StyledForm>
  );
}

export default Form;
