import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getTasks } from '../redux/actions/tasksActions'
// import TaskItem from '../components/tasks/TaskItem'


class TasksContainer extends React.Component {

    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        console.log(this.props)
        return (
            <div className="matter">
            <h3>Your Tasks</h3>
            <Paper style={{ overflow:'hidden',margin: '5px', display: 'flex',justifyContent: 'space-between' }}>
    
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell>Matter</TableCell>
                </TableRow>
              </TableHead>
    
              <TableBody>
                {this.props.tasks.map((task => (
                  <TableRow key={task.id} >
                    <TableCell>
                        <Link to={`/tasks/${task.id}`}>{task.task_name} </Link>                
                    </TableCell>
                    <TableCell>
                        {task.client}
                    </TableCell>
                  </TableRow>
                )))}
              </TableBody>
            </Table>   
            </Paper>
            </div>
            // <div>
            //     {this.props.tasks.map(task => (
            //         <TaskItem 
            //             key={task.id}
            //             tasks={task} />
            //     ))}
                   
            // </div>
        )
    }
}

const mSTP = state => {
    return {
        tasks: state.tasksReducer.tasks
    }
}

// const mDTP = dispatch => {
//     return {
//         getTasksWithDispatch: () => dispatch(getTasks())
//     }
// }



export default connect(mSTP, { getTasks })(TasksContainer)
