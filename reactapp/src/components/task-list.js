import React, { useEffect, useState } from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'

const TaskList = (props) => {

    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState('')
    const [nameError, setNameError] = useState('')

    useEffect(() => {
        const addTasks = () => {
            if (props.listTasks !== undefined) {
                setTaskList(props.listTasks)
            }
        }
        addTasks()
    }, [props.listTasks])

    // Save a new task in the to do list selected
    const handleClick = async () => {
        taskList.push(newTask);
        setNewTask('')
        setNameError('')
        await fetch('/save-task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `task=${newTask}&name=${props.listName}`
        })

    }

    // Delete task in database and in front
    const deleteTask = async (name, index) => {
        let rawResponse = await fetch('/delete-task', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `name=${name}&todoname=${props.listName}`
        })
        let response = await rawResponse.json()
        setTaskList([...taskList].filter((item, i) => i !== index))
    }


    // Map all tasks from store at to-do list load and manually added
    let mapTasks;
    if (taskList !== undefined && taskList.length > 0) {
        mapTasks = taskList.map((name, i) => {
            return <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={i}>
                <div >
                    {name}
                </div>
                <div>
                    {
                        // <FontAwesomeIcon style={{ cursor: 'pointer', marginRight: 10 }} icon={faCheckCircle} color='green' onClick={() => checkTask(name)} />
                    }
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTrash} color='red' onClick={() => deleteTask(name, i)} />
                </div>
            </ListGroupItem>
        })
    }


    return (
        <div className={"border border-info border-3 rounded-3"} style={{ height: '100%' }}>
            <div style={{ backgroundColor: '#74b9ff', textAlign: 'center', fontWeight: 'bold' }}>
                {props.listName}
            </div>
            <ListGroup style={{ width: 400 }}>
                {mapTasks}
            </ListGroup>
            <InputGroup style={{ width: 400 }}>
                <Input type='text' placeholder="Add Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <InputGroupAddon addonType="append">
                    <Button onClick={() => handleClick()}>Add</Button>
                </InputGroupAddon>
            </InputGroup>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { listName: state.list.name, listTasks: state.list.tasks }
}

export default connect(
    mapStateToProps,
    null
)(TaskList)