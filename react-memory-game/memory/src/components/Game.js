//layout of game
import React from "react";
import Images from "./Images";
//import rules to display on page
import Rules from "./Rules";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
        <Rules/> 
      </div>
    );
  }
}

export default Game;