import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
};

export default FunctionClick;
