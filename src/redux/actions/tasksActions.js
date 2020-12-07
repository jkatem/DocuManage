const GET_TASKS = 'GET_TASKS'

export default function getTasks() {
    return function(dispatch) {
        
        fetch('http://localhost:3000/api/v1/tasks')
        .then(resp => resp.json())
        .then(tasksData => {
            dispatch({type: GET_TASKS, payload: tasksData})
        })
    }
}