import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Replace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            age: "",
        };

        this.onHandleNameChange = this.onHandleNameChange.bind(this);
        this.onHandleAgeChange = this.onHandleAgeChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleNameChange(e) {
        console.log(e.target.value, 'username')
        this.setState({
            username: e.target.value,
        });
    }

    onHandleAgeChange(e) {
        console.log(e.target.value, 'age')
        this.setState({
            age: e.target.value
        });
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const username = this.state.username;
        const age = this.state.age;
        this.props.onSearchTermChange(username, age);
        this.setState({
            username: '',
            age: ''
        });
    }

    render() {
        return (
            <form>
                <p>Enter your name:</p>
                <input
                    id="mainInput"
                    onChange={this.onHandleNameChange}
                    placeholder="Enter name..."
                    value={this.state.username}
                    type="text"
                />
                <p>Enter your age:</p>
                <input
                    id="mainInput"
                    onChange={this.onHandleAgeChange}
                    placeholder="Enter age..."
                    value={this.state.age}
                    type="text"
                />

                <br /><br />
                <button onClick={this.onHandleSubmit} type="submit">
                    <Link to="/replace">Submit</Link>
                </button>
            </form>
        );
    }

}

export default Replace;
