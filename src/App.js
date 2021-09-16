import UsePreviousState from "./hooks/1.use-state/use-previous-state";
import UseState from "./hooks/1.use-state/use-state";
import UseStateWithArray from "./hooks/1.use-state/use-state-with-array";
import UseStateWithObject from "./hooks/1.use-state/use-state-with-object";

function App() {
  return (
    <div className="container">
      <UseStateWithArray />
      {/* <UseStateWithObject /> */}
      {/* <UsePreviousState /> */}
      {/* <UseState></UseState> */}
    </div>
  );
}

export default App;
