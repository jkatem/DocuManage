const matterReducer = (state = {matters: [], loading: false}, action) => {

    switch(action.type) {

        case "FETCH_MATTERS":
            // debugger
            return {
                ...state,
                matters: action.payload,
                loading: false                
            }

        case "ADD_MATTER":
            return { 
                ...state,
                matters: [...state.matters, action.payload]
                // matters: action.payload
            }
        
        case "DELETE_MATTER":
            // debugger
            // console.log(state)
            const matters = state.matters.filter(matter => matter.id !== action.payload.id)
            // console.log(action);
            return {
                ...state, matters
            }
        
        default:
            return state
    }
}

export default matterReducer