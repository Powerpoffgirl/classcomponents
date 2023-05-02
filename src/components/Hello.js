// import react from "react";
import React, { Component } from "react";

// // Function component
// const Hello = ({ name, heroname, children }) => {
//   // console.log("props", props);

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>{heroname}</p>
//       <p>{children}</p>
//     </div>
//   );
//   //   without using JSX
//   //   createElement method syntax minimum 3 parameters first parameter a HTML tag to render
//   // second optional property
//   // third children for the div tag
//   //   In Javascript class is a reserved keyword
//   //   JSX camelCase
//   // return React.createElement(
//   //   "div",
//   //   { id: "hello", className: "dummyClass" },
//   //   React.createElement("h1", null, "Hello Vishvas")
//   // );
// };

// Class components
class Hello extends Component {
  render() {
    const { name, heroname } = this.props;
    // const {state1, state2 } = this.state
    return (
      <div>
        <h1>Hello {name} </h1>
      </div>
    );
  }
}

export default Hello;
