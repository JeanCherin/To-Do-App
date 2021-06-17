import React from 'react';

import { Navbar, NavbarText, Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './components/todo-list';
import TaskList from './components/task-list';

import list from './reducers/showList.reducer'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({ list }));

function App() {
  return (
    <Provider store={store}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }} >
          <Navbar style={{ width: 600, display: 'flex', justifyContent: 'space-around' }} className={"border border-info border-3 rounded-3"} color="light" light expand="md">
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/JeanCherin"><FontAwesomeIcon icon={faGithub} /> My GitHub </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>A Simple To-Do App</NavbarText>
          </Navbar>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 50 }} >
          <TodoList />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
