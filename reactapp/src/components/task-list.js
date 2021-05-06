import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = (props) => {
    return (
        <div>
            <InputGroup style={{ width: 400 }}>
                <Input placeholder="Add Task" />
                <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
            </InputGroup>
            <ListGroup style={{ width: 400 }}>
                <ListGroupItem>Task 1</ListGroupItem>
                <ListGroupItem>Task 2</ListGroupItem>
                <ListGroupItem>Task 3</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default TaskList