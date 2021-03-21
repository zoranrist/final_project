import { TodosContext } from "../../contexts/todos.context";

import "./todos-list.component.css";

const TodosList = () => {
  return (
    <>
      <TodosContext.Consumer>
        {(value) => {
          return (
            <div className="todoapp">
              <ul>
                {value.todos.map((todo) => {
                  return (
                    <li key={todo.id}>
                      <div className="view">
                        <input
                          className="toggle"
                          type="checkbox"
                          checked={todo.completed}
                          onChange={function () {
                            return value.onChangeCheckboxHandler(todo.id);
                          }}
                        />
                        <div className="todo-text">{todo.text}</div>

                        <button onClick={() => value.onDeleteHandler(todo.id)}>
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      </TodosContext.Consumer>
    </>
  );
};

export default TodosList;
