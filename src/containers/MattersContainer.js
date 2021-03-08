import React, { Component } from 'react'
// import Matter from '../components/matters/Matter'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MattersContainer extends Component {
  // state = {
  //   search:null,
  //   xxx:''
  // }

  // searchSpace=(event) => {
  //   let keyword = event.target.value;
  //   this.setState({search:keyword})
  // }

  state = {
    filterMatter: [],
  }

  // onSearchSubmit = (searchTerm) => {
  //   debugger
  //   const mattersFiltered = this.props.matters.filter(matter => matter.case_title === searchTerm.toLowerCase())
    
  //   // console.log(mattersFiltered)

  //   this.setState({filterMatter: mattersFiltered})
  //   debugger
  // }

    // onSearchSubmit = (searchTerm => {
    //   debugger
    //   const filteredMatters = this.props.mattersArr.filter(matter => {
       
    //   })
    // })


    // const mattersFiltered = this.props.matters.filter(matter => {
    //   if(matter.case_title === searchTerm.toLowerCase())
    //     return matter
      // else if(data.case_title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
      //   return data
      // }
      // }).map((data) => console.log(data))
  

    // renderMatter() {

    // }

  render() {

    // const styleInfo = {
    //   paddingRight:'10px'
    // }
    // const elementStyle ={
    //   border:'solid',
    //   borderRadius:'10px',
    //   position:'relative',
    //   left:'10vh',
    //   height:'3vh',
    //   width:'20vh',
    //   marginTop:'5vh',
    //   marginBottom:'10vh'
    // }

    return (
      <>
      <SearchBar onSubmit={this.onSearchSubmit}/>

      <div className="matter" >
        <h3>Your Matters</h3>
        
        <Paper style={{ overflow:'hidden',margin: '5px', display: 'flex',justifyContent: 'space-between' }}>
        
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Matter</TableCell>
              <TableCell>Client</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          
            {this.props.mattersArr.map((matter => (
              
              <TableRow key={matter.id} >
                <TableCell>
                    <Link to={`/matters/${matter.id}`}>{matter.case_title} </Link>                
                </TableCell>
                <TableCell>
                    {matter.client}
                </TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>   
        </Paper>
        
      </div>
      </>
    )
  }
}

const mSTP = state => {
  return {mattersArr: state.matterReducer.matters};
}

const mDTP = dispatch => ({
  deleteMatter: id => dispatch({type: "DELETE_BAND", id})
});

export default connect(mSTP, mDTP)(MattersContainer);

// this.onSearchSubmit