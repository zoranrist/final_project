import React, { useState } from "react";

import { nextTodoId } from "../utils/nextTodoId";

const TodosContext = React.createContext();

const TodosContextProvider = (props) => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
    { id: 2, text: "Learn JavaScript", completed: false },
    { id: 3, text: "Learn CSS", completed: false },
  ]);

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter" && val !== "") {
      setTodos(
        todos.concat({ id: nextTodoId(todos), text: val, completed: false })
      );
      setVal("");
    }
  };

  const onChangeCheckboxHandler = (id) => {
    console.log(id);
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const onDeleteHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      }

      return true;
    });

    setTodos(newTodos);
  };

  const onClickCompletedHandler = () => {
    console.log("blah");
    const newTodos = todos.map((todo) => {
      // return { id: todo.id, text: todo.text, completed: todo.completed, completed: true }
      // ...todo --> id: todo.id, text: todo.text, completed: todo.completed
      return { ...todo, completed: true };
    });

    setTodos(newTodos);
  };

  const onClickClearHandler = () => {
    const newTodos = todos.filter((todo) => {
      // return { id: todo.id, text: todo.text, completed: todo.completed, completed: true }
      // ...todo --> id: todo.id, text: todo.text, completed: todo.completed
      if (todo.completed) {
        return false;
      }

      return true;
    });

    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        val,
        todos,
        onChangeHandler,
        onKeyUpHandler,
        onChangeCheckboxHandler,
        onDeleteHandler,
        onClickCompletedHandler,
        onClickClearHandler,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodosContextProvider, TodosContext };
