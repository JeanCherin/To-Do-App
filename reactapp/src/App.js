import React from 'react';
import { Navbar, NavbarText, Nav, NavItem, NavLink } from 'reactstrap'
import TodoList from './components/todo-list';
import TaskList from './components/task-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }} >
        <Navbar style={{ width: 600 }} className={"border border-info border-3 rounded-3"} color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/JeanCherin"><FontAwesomeIcon icon={faGithub} /> My GitHub </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>A To-Do App by Jean Cherin</NavbarText>
        </Navbar>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 50 }} >
        <TodoList />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
