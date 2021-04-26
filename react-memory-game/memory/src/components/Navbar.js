import React from 'react';
//create navbar that displays user name, score and title of game
class Navbar extends React.Component {
    render() {
        const {name , score } = this.props;
        return(
            <div className="navbar">
                <div className="game-title">  React Memory Game  </div>
                <div className="name">{name}</div>
                <div className="score"> Score :  {score}</div>
            </div>
        );
    }
}

export default Navbar;