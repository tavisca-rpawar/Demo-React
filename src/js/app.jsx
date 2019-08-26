import React from "react";
import ReactDOM from "react-dom";
import Header from "./common/header.jsx";
import Content from "./common/content.jsx";
import Footer from "./common/footer.jsx";
import PropTypes from "prop-types";

const details = {
    name: "Rupika Pawar",
    age: 21,
    city: "Pune"
}
Header.propTypes = {
    name: PropTypes.string.isRequired
}
class App extends React.Component {
    render() {
        return <div className = "main">
            <Header name ="Rupika"/>
            <Content userInfo ={details}/>
            <button onClick ={this.onButtonClick}>Click Here</button>
            <Footer />
        </div>;
    }
    onButtonClick() {
        alert("You Clicked !!");
    }
}
function tick() {
    ReactDOM.render(
        <App />,
        document.getElementById('content')
    );
}
setInterval(()=>{
    tick();
}, 1000);
// const rootElement = document.getElementById('content');
// const element = React.createElement('div',
//                 {className:'main'},
//                 'Hello Duniy');
// const contentText = "Hello Duniya";
// const element = <div className ="main">{contentText}</div>;
// ReactDOM.render(element, rootElement);

