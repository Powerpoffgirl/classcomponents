// import react from "react";
import React from "react";

const Hello = (props) => {
  console.log("props", props);

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>{props.heroname}</p>
      <p>{props.children}</p>
    </div>
  );
  //   without using JSX
  //   createElement method syntax minimum 3 parameters first parameter a HTML tag to render
  // second optional property
  // third children for the div tag
  //   In Javascript class is a reserved keyword
  //   JSX camelCase
  // return React.createElement(
  //   "div",
  //   { id: "hello", className: "dummyClass" },
  //   React.createElement("h1", null, "Hello Vishvas")
  // );
};

export default Hello;
