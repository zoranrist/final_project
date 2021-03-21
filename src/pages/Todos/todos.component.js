import TodosList from "../../components/TodosList/todos-list.component";
import TodosHeader from "../../components/TodosHeader/todos-header.component";
import TodosFooter from "../../components/TodosFooter/todos-footer.component";

const Todos = () => {
  return (
    <section className="medium-container">
      <div id="todos">
        <TodosHeader />
        <TodosList />
        <TodosFooter />
      </div>
    </section>
  );
};

export default Todos;
