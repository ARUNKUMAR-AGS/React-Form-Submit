import React, { Component } from "react";

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: ''
        };

        this.onHandleUpdateNameChange = this.onHandleUpdateNameChange.bind(this);
        this.onHandleUpdateAgeChange = this.onHandleUpdateAgeChange.bind(this);
        this.onHandleReplace = this.onHandleReplace.bind(this);
    }

    onHandleUpdateNameChange(e) {
        console.log(e.target.value, ' Updated username')
        this.setState({
            username: e.target.value,
        });
    }

    onHandleUpdateAgeChange(e) {
        console.log(e.target.value, ' Updated age')
        this.setState({
            age: e.target.value
        });
    }


    onHandleReplace(e) {
        e.preventDefault();
        const username = this.state.username;
        const age = this.state.age;
        this.props.onUpdate(username, age);
        this.setState({
            username: '',
            age: ''
        });
    }

    render() {
        return (
            <form>
                <p>Enter your Updated name:</p>
                <input
                    id="mainInput"
                    onChange={this.onHandleUpdateNameChange}
                    placeholder="Enter name..."
                    value={this.state.username}
                    type="text"
                />
                <p>Enter your Updated age:</p>
                <input
                    id="mainInput"
                    onChange={this.onHandleUpdateAgeChange}
                    placeholder="Enter age..."
                    value={this.state.age}
                    type="text"
                />
                <br /><br />
                <button onClick={this.onHandleReplace} type="submit">
                    Replace
        </button>
            </form>
        );
    }
}

export default Update;
