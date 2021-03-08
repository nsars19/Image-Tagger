import styled from "styled-components";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

const StyledHighScore = styled.div`
  font-size: 18px;
  display: grid;
  place-items: center;
  margin: 20px 0;

  h2 {
    // padding-bottom: 20px;
    padding: 5px;

    letter-spacing: 8px;
  }

  ul {
    list-style: none;
    width: 95%;
    border-radius: 6px;
    box-shadow: 0px 0px 1.5px #${({ colors }) => colors.gray},
      0px 0px 3.5px #${({ colors }) => colors.gray};
  }

  @media (min-width: 1024px) {
    ul {
      width: 75%;
    }
  }
  @media (min-width: 1440px) {
    ul {
      width: 65%;
    }
  }

  li {
    padding: 10px 5px;
    border: 1px solid #${({ colors }) => colors.gray};
    display: flex;
    justify-content: space-between;
  }

  li:nth-child(2n) {
    background-color: #${({ colors }) => colors.lightBlue};
    color: #${({ colors }) => colors.cream};
  }

  li:nth-child(2n - 1) {
    background-color: #${({ colors }) => colors.cream};
  }

  li:first-child {
    border-radius: 5px 5px 0 0;
  }

  li:last-child {
    border-radius: 0 0 5px 5px;
    border-bottom: 1px solid #${({ colors }) => colors.gray};
  }
`;

const HighScore = ({ imageID, colors }) => {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    (async function getHighScores() {
      const res = await fetch(`http://localhost:3000/highscores/${imageID}`);
      const data = await res.json();

      setScores(data);
    })();
  }, [imageID]);

  if (scores) {
    return (
      <StyledHighScore colors={colors}>
        <ul>
          <li>
            <h2>Level {imageID}</h2>
          </li>
          {scores.map(({ name, time }) => {
            return (
              <li key={uniqid()}>
                <span>{name}</span>
                <span>{time}s</span>
              </li>
            );
          })}
        </ul>
      </StyledHighScore>
    );
  } else {
    return <h1>LOADING</h1>;
  }
};

export default HighScore;
