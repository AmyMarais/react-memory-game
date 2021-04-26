//user can restart game and received messages upon completion
import React from 'react';
//import messages component
import {messages} from './Messages';

//access the message component and display it
class EndGame extends React.Component {
    handleClick = () => {
        this.props.newGame(false);
    };
    render() {
        messages.sort(() => Math.random() - 0.5); //choose from a selection of messages created
        return(
            <div className="end-game">
                <div className="message">
                    <h3>{messages[0].title}</h3>
                    <p>{messages[0].message}</p>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                        Play Again
                    </button>
                </div>
            </div>
        );
    }
}

export default EndGame;