import React from "react";
import ReactDOM from "react-dom";
class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    render() {
        const { userInfo} = this.props;
        const currentDateTime = new Date().toLocaleTimeString();
        const {counter} = this.state;
        return <section>
            <div className = "showDateTime">
                <input value ={currentDateTime} />
            </div>
            <table border ="1">
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>City</td>
                </tr>
                <tr>
                    <td>{userInfo.name}</td>
                    <td>{userInfo.age}</td>
                    <td>{userInfo.city}</td>
                </tr>
            </table>
            <div>
                <h2> Counter: {counter}</h2>
                <button onClick={this.changeValue .bind(this, 'INCREMENT')}> Increment</button>
                <button onClick={this.changeValue .bind(this, 'DECREMENT')}> Decrement</button>
            </div>
        </section>;
    }
    changeValue(action) {
        let currentValue = this.state.counter;
        const newValue = action === 'INCREMENT' ? currentValue + 1: currentValue - 1;
        this.setState({
            counter: (newValue >= 0? newValue : 0)
        });
    }
}

module.exports = Content;