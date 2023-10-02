import React, {useReducer} from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "buying") {
    return {money: state.money - 20};
  }
  if (action.type === "selling") {
    return {money: state.money + 20};
  }
  if (action.type === "celebrity visit") {
    return {money: state.money + 1000};
  }
};
function App() {
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> Wallet: {state.money}</h1>
      <button className = "sub" onClick={() => dispatch({type: "buying"})}>Buy</button>
      <button className = "add" onClick={() => dispatch({type: "selling"})}>Sell</button>
      <button  className = "add" onClick={() => dispatch({type: "celebrity visit"})}>Celebrity Visit</button>
    </div>
  );
}
export default App;