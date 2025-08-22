import React from "react";
import { RecipesItem, RecipesList } from "../styles/Recipes.js";
import { Difficulty } from "./Difficulty";

export class Recipes extends React.Component {
  render() {
    return (
      <RecipesList>
        {this.props.recipes.map((recipe) => (
          <RecipesItem key={recipe.id}>
            <img src={recipe.photo} alt="" width="100px" />
            <h2>{recipe.name}</h2>
            <p>Servings: {recipe.serverings}</p>
            <p>Time: {recipe.time}</p>
            <p>Calories: {recipe.calories}</p>
            <Difficulty
              id={recipe.buttonId}
              diffc={recipe.difficulty}
            />
          </RecipesItem>
        ))}
      </RecipesList>
    );
  }
}
