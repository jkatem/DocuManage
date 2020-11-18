let initialState = {
    matters: []
 }

export default function matterReducer(state = initialState, action) {
    // console.log(state)
    // console.log(action)

    switch(action.type) {
        case 'GET_MATTERS':
            return {
                matters: action.payload.data
            }

        default:
            return state;
    }
}