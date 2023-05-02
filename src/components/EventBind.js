import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //     console.log(this); //it is showing undefined
  //     // Now we need event Binding to solve this issue

  //     // Approach 1.Bind in render method
  //     // Approach 2. Arrow function in render method
  //     // Approach 3. Bind in the constructor method
  //    // Approach 4. class property as an arrow function
  //   }

  clickHandler = () => {
    this.setState({
      message: "Good Bye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1. <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 2. <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
