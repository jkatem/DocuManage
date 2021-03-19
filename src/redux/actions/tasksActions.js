const GET_TASKS = 'GET_TASKS'

export const getTasks = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/tasks')
        .then(resp => resp.json())
        .then(task => {
            dispatch({type: GET_TASKS, payload: task})
        })
    }
}