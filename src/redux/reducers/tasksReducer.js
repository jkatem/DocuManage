let initialState = {
    tasks: []
}

export default function tasksReducer(state = initialState, action) {

    switch(action.type) {
        case 'GET_TASKS':
            return {                
                tasks: action.payload
            }
        default:
            return state;
    }
}