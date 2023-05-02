import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // Approach 2:
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishwas</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // Approach 1:
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // Approach 3: Suggested
    //     return this.state.isLoggedIn ? (
    //       <div>Welcome Vishwas</div>
    //     ) : (
    //       <div>Welcome Guest</div>
    //     );
    //   }

    // Approach 4:
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>;
  }
}

export default UserGreeting;
