import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = (props) => {
    return (
        <div className={"border border-info border-3 rounded-3"}>
            <InputGroup style={{ width: 400 }}>
                <Input placeholder="Add Task" />
                <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon>
            </InputGroup>
            <ListGroup style={{ width: 400 }}>
            </ListGroup>
        </div>
    )
}

export default TaskList