import React, { Component } from 'react'

export default class Task extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: "wake up", id: 1 }, { task: "study reactJs", id: 2 }, { task: "study dsa", id: 3 }],
            currentTask: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            currentTask: e.target.value
        })
    }
    handleAddTask = () => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currentTask, id: this.state.tasks.length + 1 }],
            currentTask: ''
        })
    }
    handleDelete = (id) => {
        let newTasks = this.state.tasks.filter((task) => {
            return task.id != id
        })
        this.setState({
            tasks: [...newTasks]
        })
    }
    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange} value={this.state.currentTask} />
                <button onClick={this.handleAddTask}>ADD TASK</button>
                <ul>
                    {this.state.tasks.map((taskObj) => (
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={() => { this.handleDelete(taskObj.id) }}>DELETE</button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

