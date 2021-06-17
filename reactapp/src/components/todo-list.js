import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem, Alert } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = (props) => {

    const [toDoData, setToDoData] = useState([])
    const [toDoName, setToDoName] = useState('');
    const [nameError, setNameError] = useState('')

    // Get all to-dos registered in the database at page load
    useEffect(() => {
        const fetchData = async () => {
            let rawResponse = await fetch('/get-todo');
            let response = await rawResponse.json();
            setToDoData([...toDoData, ...response])
        }
        fetchData()
    }, [])

    // Verify if a name has been entered, and if so, add the value of input field into To-do list + database and clear the field //
    const handleClick = async () => {
        if (toDoName.length === 0) {
            setNameError('Please enter a name for your To-Do')
        } else {
            await fetch('/save-todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `name=${toDoName}`
            });
            setToDoData([...toDoData, {name : toDoName}]);
            setToDoName('');
            setNameError('')
        }
    }

    // Delete to-do clicked in database + state //
    const deleteToDo = async (name, index) => {
        let rawResponse = await fetch ('/delete-todo', {
            method : 'DELETE',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body : `name=${name}`
        })
        let response = await rawResponse.json()
        setToDoData([...toDoData].filter((item, i) => i !== index))
    }

    // Display To-do list //
    let mapToDo;
    if (toDoData.length > 0) {
        mapToDo = toDoData.map((item, i) => {
            return <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={i}>
                <div>
                    {item.name}
                </div>
                <div>
                    <FontAwesomeIcon style={{ cursor: 'pointer', marginRight: 10 }} icon={faEye} color='blue' onClick={() => props.showList(item.name, item.tasks)} />
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTrash} color='red' onClick={() => deleteToDo(item.name,i)} />
                </div>
            </ListGroupItem>
        })
    }

    // Alert display
    let alert;
    if (nameError.length > 0) {
        alert = <Alert style={{ marginBottom: '0' }} color="danger"> {nameError} </Alert>
    }

    return (
        < div className={"border border-info border-3 rounded-3"} style={{height : '100%'}}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        showList: (name, tasks) => {
            dispatch({ type: 'show', listName: name, listTasks : tasks })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TodoList)