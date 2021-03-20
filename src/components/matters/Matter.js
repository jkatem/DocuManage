import React from 'react'
import { connect } from 'react-redux'
import { deleteMatter } from '../../redux/actions/mattersActions'
import './matter.css'

function Matter(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.deleteMatter(props.matters.id, props.history)
    }

    return (
           <> 
            <div className="matter">
                <h6>Case Title: {props.matters.case_title}</h6>
                <h6>Lead Attorney: {props.matters.lead_attorney}</h6>
                <h6>Associate Attorney: {props.matters.associate_attorney}</h6>
                <h6>Client: {props.matters.client}</h6>
                <h6>File Number: {props.matters.file_number}</h6>
                <h6>Case Description: {props.matters.case_description}</h6>
                <h6>Practice Area: {props.matters.practice_area}</h6>
                <h6>Status: {props.matters.status}</h6>
                <h6>Open Date: {props.matters.open_date}</h6>
                <h6>Closed Date: {props.matters.closed_date}</h6>
                <button onClick={handleClick}>Delete Matter</button>
            </div>
            
            </>
    )
}
export default connect(null, {deleteMatter})(Matter)


