import { NavLink } from "react-router-dom";

import "./header.component.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>Aplikacija na Zoran Ristovski</h1>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos" activeClassName="active">
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-2" activeClassName="active">
              Contact 2
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
