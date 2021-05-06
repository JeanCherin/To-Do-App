import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = (props) => {

    return (
        < div>
            <InputGroup style={{ width: 400 }}>
                <Input placeholder="Name of to-do list" />
                <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
            </InputGroup>
            <ListGroup style={{ width: 400 }}>
                <ListGroupItem>To-Do List 1</ListGroupItem>
                <ListGroupItem>To-Do List 2</ListGroupItem>
                <ListGroupItem>To-Do List 3</ListGroupItem>
            </ListGroup>
        </div >
    )
}

export default TodoList