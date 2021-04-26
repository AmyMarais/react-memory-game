//rules for game
import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {  
    return (
      <button 
        className="btn-pink-darken-4" 
        onClick={props.toggle}
        >
        {props.name}
      </button>
    )
  }
  
  
  class Rules extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { isOpen: false }
      this.toggle = this.toggle.bind(this);
    }
    
    
    toggle() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }
    
    
    render() {
      return(
        <div class="container mg-top">
          <Button 
            name={this.state.isOpen ? "Hide" : "Show"}  
            toggle={this.toggle}
          />
          <br/>
          {this.state.isOpen && 
            <div class="card-panel-pink-darken-2">
              <span class="white-text">
               Game Rules: <br/>
                1.Only two cards can be turned over at a time. <br/>
                2.If the two cards clicked on match in image, they will remain facing up.<br/>
                3.The aim of the game is to match all the pairs together<br/>
                4.Once all pairs are matched you win!
              </span>
            </div>
          }
        </div>
      );
    } 
  }
  
  
  ReactDOM.render(
    <Rules />,
    document.getElementById('root')
  );

export default Rules;
  