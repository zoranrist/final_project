import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/home.component";
import Todos from "./pages/Todos/todos.component";
import SingleTodo from "./pages/SingleTodo/single-todo.component";
import AboutUs from "./pages/AboutUs/about-us.component";
import Contact from "./pages/Contact/contact.component";
import Contact2 from "./pages/Contact2/contact2.component";
import Header from "./common/Header/header.component";
import Footer from "./common/Footer/footer.component";
import { TodosContextProvider } from "./contexts/todos.context";

import "./App.css";

function App() {
  return (
    <TodosContextProvider>
      <Header />
      <>
        <Switch>
          <Route path="/todos/:title" component={SingleTodo} />
          <Route path="/todos" component={Todos} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact-2" component={Contact2} />
          <Route path="/" component={Home} />
        </Switch>
      </>
      <Footer />
    </TodosContextProvider>
  );
}

export default App;
