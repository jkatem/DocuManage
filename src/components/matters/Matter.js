import React, { Component } from 'react'
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { deleteMatter } from '../../redux/actions/mattersActions'
import './matter.css'


class Matter extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.deleteMatter(this.props.matters.id, this.props.history)
    }

    render() {
        return (
            
            <div className="matter">
                <h6>Case Title: {this.props.matters.case_title}</h6>
                <h6>Lead Attorney: {this.props.matters.lead_attorney}</h6>
                <h6>Associate Attorney: {this.props.matters.associate_attorney}</h6>
                <h6>Client: {this.props.matters.client}</h6>
                <h6>File Number: {this.props.matters.file_number}</h6>
                <h6>Case Description: {this.props.matters.case_description}</h6>
                <h6>Practice Area: {this.props.matters.practice_area}</h6>
                <h6>Status: {this.props.matters.status}</h6>
                <h6>Open Date: {this.props.matters.open_date}</h6>
                <h6>Closed Date: {this.props.matters.closed_date}</h6>
                <button onClick={this.handleClick}>Delete Matter</button>
            </div>
        )
    }

}

export default connect(null, { deleteMatter })(Matter); 
