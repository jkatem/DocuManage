// import React, { Component } from 'react'

// export default class SearchBar extends Component {

//     state = {
//         searchString: ''
//     }

//     handleOnChange = (event) => {
//         this.setState({
//             searchString: [event.target.value]
//             // console.log(event.target.value)
//         })
//     }

//     onFormSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit(this.state.term)
//     }

//     render() {
//         return (
//             <form className='form-center' onSubmit={this.onFormSubmit}>
//                 <input type="text" value={this.state.term} onChange={this.handleOnChange} placeholder="Search"/>
//             </form>
//         )
//     }
// }

import React from 'react';

class SearchBar extends React.Component  {

    state = {
        searchTerm: '',
    }

    // editSearchTerm = (event) => {
    //     this.setState ({searchTerm: event.target.value}) 
    // }

    // dynamicSearch = (event) => {
        
    //     event.preventDefault(); 
    //     this.props.onSubmit(this.state.searchTerm)
    // }
    onInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm)
    }

    render() {

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <form style={BarStyling} >
            <input 
                type='text' 
                value={this.state.searchTerm} 
                onChange={this.onInputChange} 
                placeholder="Search for a matter!" />
            <button type="submit">Search</button>
        </form> 
    )}
}
export default SearchBar;


