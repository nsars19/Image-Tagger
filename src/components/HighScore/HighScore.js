import styled from "styled-components";
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Loading from "./Loading/Loading";

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

  .replay {
    padding: 12px;
    border-radius: 6px;
    margin-right: 5px;
    background: #${({ colors }) => colors.gray};

    &:hover {
      transition: background 0.03s ease, color 0.03s ease;
      background: #${({ colors }) => colors.lightBlue};
      color: #${({ colors }) => colors.cream};
    }
  }
`;

const HighScore = ({ imageID, colors, setGameOver }) => {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    (async function getHighScores() {
      const url = "https://serene-falls-76725.herokuapp.com";
      const res = await fetch(`${url}/highscores/${imageID}`);
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
            <span className="replay" onClick={() => setGameOver(false)}>
              Play this level
            </span>
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
    return <Loading colors={colors} />;
  }
};

export default HighScore;
