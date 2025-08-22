import React from "react";
import { DifficultyContainer } from "../styles/Difficulty.js";

export class Difficulty extends React.Component {
  render() {
    const levels = [
      { label: "Easy", id: "0" },
      { label: "Medium", id: "1" },
      { label: "Hard", id: "3" },
    ];
    return (
      <DifficultyContainer>
        {levels.map((level) => (
          <button
            key={level.id}
            className={level.id === this.props.diffc ? "active" : ""}
          >
            {level.label}
          </button>
        ))}
      </DifficultyContainer>
    );
  }
}
