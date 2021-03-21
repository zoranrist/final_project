import React from "react";
import { TodosContext } from "../../contexts/todos.context";

import "./todos-header.component.css";

class TodosHeader extends React.Component {
  render() {
    return (
      <>
        <TodosContext.Consumer>
          {(value) => {
            return (
              <header className="header">
                <h2>List of todos</h2>
                <input
                  className="new-todo"
                  type="text"
                  value={value.val}
                  onChange={value.onChangeHandler}
                  onKeyUp={value.onKeyUpHandler}
                />
              </header>
            );
          }}
        </TodosContext.Consumer>
      </>
    );
  }
}

export default TodosHeader;
