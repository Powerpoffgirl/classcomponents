import "./App.css";
import Car from "./components/Car";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <EventBind />

      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* Hello
      <Car />
      <Hello name="Vishwas" heroname="Good boy">
        <p>This is abou Vishwas. He is a good boy.</p>
      </Hello>
      <Hello name="Swamy">
        <button>Add time</button>
      </Hello>
      <Hello name="Kajal" /> */}
    </div>
  );
}

export default App;

// PROPS VS STATES
/*
  PROPS
  Props get passed to the component -> from parent to child that's why child component cant change them
  Function parameters
  props are immutable
  props -> Functional components
  this.props -> Class components

  STATE
  state is managed within the component 
  Variables declared in the function body
  State can be changed
  useState Hook -> Functional components
  this.state -> Class components
*/
