// import React from 'react';
// import { connect } from 'react-redux';

import React from 'react'
import { connect } from 'react-redux'
import getTasks from '../redux/actions/tasksActions'


class TasksContainer extends React.Component {

    componentDidMount() {
        // fetch('http://localhost:3000/api/v1/tasks')
        // .then(resp => resp.json())
        // .then(resp => console.log(resp))
        this.props.getTasksWithDispatch()
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                {this.props.tasks.map(taskObj =>
                <ul>{taskObj.attributes.case_name}
                </ul>
                )}                   
            </div>
        )
    }
}

const mSTP = state => {
    return {
        tasks: state.tasksReducer.tasks
    }
}

const mDTP = dispatch => {
    return {
        getTasksWithDispatch: () => dispatch(getTasks())
    }
}



export default connect(mSTP, mDTP)(TasksContainer)
