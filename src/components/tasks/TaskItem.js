
import React from 'react';
import './Task.css'

const TaskItem = (props) => {

    return (
        <div className='task-item'>
            <h3 style={{padding: "10px", position: "center", color:"green"}}>{props.tasks.matter.case_title}</h3>
            <h6>Todo: {props.tasks.task_name}</h6><br/>
            <h6>Description: {props.tasks.task_description}</h6><br/>
            <h6>Priority: {props.tasks.priority}</h6>
        </div>
    )
}

export default TaskItem