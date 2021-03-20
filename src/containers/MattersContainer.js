import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { deleteMatter } from '../redux/actions/mattersActions';

class MattersContainer extends Component {

  render() {
    return (
      <>
      <div className="matter" >
        <h3>Your Matters</h3>
        <Paper style={{ overflow:'hidden',margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Matter</TableCell>
              <TableCell>Client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.props.matters.map(matter => (
              <TableRow key={matter.id} >
                <TableCell>
                    <Link to={`/matters/${matter.id}`}>{matter.case_title} </Link>                
                </TableCell>
                <TableCell>
                    {matter.client}
                </TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>   
        </Paper>
        
      </div>
      </>
    )
  }
}

const mDTP = dispatch => ({
  deleteMatter: (id) => dispatch(deleteMatter(id)),
});

export default connect(null, mDTP)(MattersContainer);
