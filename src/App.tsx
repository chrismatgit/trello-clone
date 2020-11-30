import React, { useReducer } from "react";
import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

interface State {
  count: number;
}

type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

// const App = () => {
//   return (
//     <AppContainer>
//       <Column text="To Do">
//         <Card text="Generate app scaffold" />
//       </Column>
//       <Column text="In Progress">
//         <Card text="Learn Typescript" />
//       </Column>
//       <Column text="Done">
//         <Card text="Begin to use static typing" />
//       </Column>
//       <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
//     </AppContainer>
//   );
// };

const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};
export default App;
