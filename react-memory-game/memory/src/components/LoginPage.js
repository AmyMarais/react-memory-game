//user inputs their name to display in navbar component
import React from 'react';

class Login extends React.Component {
    state = {};

    //making use of state to store the input information
    handleChange = (e) => {
        this.setState({ name: e.target.value});
    };
    handleClick = (e) => {
        e.preventDefault();
        this.props.name(this.state.name, false);
    };
    render() {
        return (
            <div className="wrapper">
                <div className="login">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                            type = "name"
                            className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>

                        <button onClick={this.handleClick} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;