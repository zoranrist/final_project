import { TodosContext } from "../../contexts/todos.context";

const TodosFooter = () => {
  return (
    <>
      <TodosContext.Consumer>
        {(value) => {
          return (
            <section>
              <h3>Actions</h3>
              <button onClick={value.onClickCompletedHandler}>
                Mark all completed
              </button>
              <button onClick={value.onClickClearHandler}>
                Clear completed
              </button>
            </section>
          );
        }}
      </TodosContext.Consumer>
    </>
  );
};

export default TodosFooter;
