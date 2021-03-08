import React, { Component } from 'react'

export default class TaskItem extends Component {
    render() {
        console.log(this.props)

        return (
            <div className='task'>
                <li>
                    {this.props.tasks.task_name}
                </li>
            </div>
        )
    }
}
