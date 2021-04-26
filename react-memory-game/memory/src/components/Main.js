import React from "react";
//import all other components
import Login from "./LoginPage";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";

//create initial state
class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "", //user input
    score: 0, //set score at beginning to 0
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 }); //increment score by 1 each time user plays
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Main;