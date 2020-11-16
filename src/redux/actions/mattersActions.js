 const ADD_MATTER = 'ADD_MATTER'

 export const addMatter = (newMatterObj, history) => {
     return (dispatch) => {
        fetch('http://localhost:3000/matters'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newMatterObj)
        })
        .then(resp => resp.json())
        .then(data => dispatch({ type: ADD_MATTER, payload: data })) 
        history.push(`/matters/${data.id}`)
    })
 }

 