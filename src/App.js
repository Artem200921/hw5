import "./App.css";
import React from "react";
import { Recipes } from "./components/Recipes";
import { GlobalStyles } from "./GlobalStyles";
import obj from "./data/recipes.json";

class App extends React.Component {
  render() {
    return (
      <GlobalStyles>
        <Recipes recipes={obj} />
      </GlobalStyles>
    );
  }
}

export default App;
