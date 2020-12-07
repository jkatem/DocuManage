let initialState = {
    tasks: []
}

export default function tasksReducer(state = initialState, action) {
    // debugger
    // console.log(action)
    // console.log(state)
    switch(action.type) {
        case 'GET_TASKS':
            return {
                tasks: action.payload.data
            }
        default:
            return state;
    }
}