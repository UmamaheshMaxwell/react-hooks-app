import UsePreviousState from "./hooks/1.use-state/use-previous-state";
import UseState from "./hooks/1.use-state/use-state";
import UseStateWithArray from "./hooks/1.use-state/use-state-with-array";
import UseStateWithObject from "./hooks/1.use-state/use-state-with-object";
import UseEffect from "./hooks/2.use-effect/use-effect";
import UseEffectCondition from "./hooks/2.use-effect/use-effect-condition";
import UseEffectFetchData from "./hooks/2.use-effect/use-effect-fetchdata";

function App() {
  return (
    <div className="container">
      <UseEffectFetchData />
      {/* <UseEffectCondition /> */}
      {/* <UseEffect /> */}
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithObject /> */}
      {/* <UsePreviousState /> */}
      {/* <UseState></UseState> */}
    </div>
  );
}

export default App;
