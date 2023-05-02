import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // setState function has two parameters, first is the state & second is the callback function
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback Value ", this.state.count);
    //   }
    // );

    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

/*
setState
- Always make use of setState and never modify the state directly
- Code has to be executed after the state has been updated? Place that code in the call back
  function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an 
  argument instead of the regular object.  
*/
