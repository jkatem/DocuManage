// import React from 'react'
import React, { Component } from 'react'
// import Matter from '../components/matters/Matter'

import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class MattersContainer extends Component {

render() {
  return (
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
            <TableRow >
              <TableCell>
                  <Link to={`/matters/${matter.id}`}>{matter.case_title}</Link>
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
  )
}
}

const mSTP = state => {
  return {mattersArr: state.matterReducer.matters};
}

// const mSTP = ({ matters }) => ({ matters })

const mDTP = dispatch => ({
  deleteMatter: id => dispatch({type: "DELETE_BAND", id})
});

export default connect(mSTP, mDTP)(MattersContainer);