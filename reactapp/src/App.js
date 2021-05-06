import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem, Navbar, NavbarText, Nav, NavItem, NavLink } from 'reactstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar style={{ width: 600 }} color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/JeanCherin">My GitHub</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>A To-Do App by Jean Cherin</NavbarText>
      </Navbar>
      <div>
        <InputGroup style={{ width: 400 }}>
          <Input placeholder="Name of to-do list" />
          <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
        </InputGroup>
        <ListGroup style={{ width: 200 }}>
          <ListGroupItem>To-Do List 1</ListGroupItem>
          <ListGroupItem>To-Do List 2</ListGroupItem>
          <ListGroupItem>To-Do List 3</ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <InputGroup style={{ width: 400 }}>
          <Input placeholder="Add Task" />
          <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
        </InputGroup>
        <ListGroup style={{ width: 200 }}>
          <ListGroupItem>Task 1</ListGroupItem>
          <ListGroupItem>Task 2</ListGroupItem>
          <ListGroupItem>Task 3</ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
