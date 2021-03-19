
const matterReducer = (state = {matters: []}, action) => {
    switch(action.type) {

        case "FETCH_MATTERS":
            return {
                matters: action.payload,
            }

        case "ADD_MATTER":
            return { 
                matters: [...state.matters, action.payload]
            }
        
        case "DELETE_MATTER":   
            const newMatter = state.matters.filter(matter => matter.id !== action.payload.id)
            return {
                
                matters: newMatter
            }
            
        default:
            return state
    }
}

export default matterReducer