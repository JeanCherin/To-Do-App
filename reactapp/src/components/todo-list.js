import React, { useState } from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem, Alert } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = (props) => {

    const [toDoNameList, setToDoNameList] = useState([]);
    const [toDoName, setToDoName] = useState('');
    const [nameError, setNameError] = useState('')

    // Verify if a name has been entered, and if so, add the value of input field into To-do list and clear the field //
    const handleClick = () => {
        if (toDoName.length === 0) {
            setNameError('Please enter a name for your To-Do')
        } else {
            setToDoNameList([...toDoNameList, toDoName]);
            setToDoName('');
            setNameError('')
        }
    }

    // Delete to-do clicked //
    const deleteToDo = (index) => {
        setToDoNameList([...toDoNameList].filter((name, i) => i !== index))
    }

    // Display To-do list //
    let mapToDo;
    if (toDoNameList.length > 0) {
        mapToDo = toDoNameList.map((name, i) => {
            return <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={i}>
                {name}
                <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faTrash} color='blue' onClick={() => deleteToDo(i)} />
            </ListGroupItem>
        })
    }
    let alert;
    if (nameError.length > 0) {
        alert = <Alert color="danger"> {nameError} </Alert>
    }

    return (
        < div className={"border border-info border-3 rounded-3"}>
            <InputGroup style={{ width: 400 }} >
                <Input type="text" placeholder="Name of to-do list" value={toDoName} onChange={(e) => setToDoName(e.target.value)} />
                <InputGroupAddon addonType="append">
                    <Button onClick={() => handleClick()} color='primary'>Add</Button>
                </InputGroupAddon>
            </InputGroup>
                {alert}
            <ListGroup style={{ width: 400 }}>
                {mapToDo}
            </ListGroup>
        </div >
    )
}

export default TodoList