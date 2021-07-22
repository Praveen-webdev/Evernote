import React, { useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
const initialstate = {
  title: "",
  content: "",
  todos: [],
};
function todoreducer(state, action) {
  switch (action.type) {
    case "field":
      return { ...state, [action.field]: action.value };
    case "submit":
      return {
        title: "",
        content: "",
        todos: [...state.todos, { title: state.title, content: state.content }],
      };
    case "delete-todo":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.id),
      };
    default:
      throw Error("unexpected action type");
  }
}
function App() {
  const [state, dispatch] = useReducer(todoreducer, initialstate);
  return (
    <div>
      <Header />
      <CreateArea
        dispatch={dispatch}
        title={state.title}
        content={state.content}
      />
      {state.todos.map((todos, index) => (
        <Note
          id={index}
          key={index}
          title={todos.title}
          content={todos.content}
          dispatch={dispatch}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
