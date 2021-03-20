const FETCH_MATTERS = 'FETCH_MATTERS'

export const fetchMatters = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/matters')
        .then(resp => resp.json())
        .then(jsonResp => {
            dispatch({ type: FETCH_MATTERS, payload: jsonResp})
        })

    }
}

export const addMatter = (newMatterObj, history) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/matters', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(newMatterObj)
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'ADD_MATTER', payload: data})
            history.push('/matters')
        })

    }
}

export const deleteMatter = (matterId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/matters/${matterId}`, {
            method: "DELETE",
        })
        .then(resp => (resp.json()))
        .then(deletedObj => {            
            dispatch({type: 'DELETE_MATTER', payload: deletedObj})
            history.push('/matters')
        })   
    }
}
