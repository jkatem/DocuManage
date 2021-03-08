import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMatter } from '../../redux/actions/mattersActions';

class MatterForm extends Component {

    state = {
        case_title: '',
        lead_attorney: '',
        associate_attorney: '',
        client: '',
        file_number: '',
        case_description: '',
        practice_area: '',
        status: '',
        open_date: '',
        closed_date: '',
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMatter(this.state, this.props.history)
        alert('Successfully Created')
        this.setState({
            case_title: '',
            lead_attorney: '',
            associate_attorney: '',
            client: '',
            file_number: '',
            case_description: '',
            practice_area: '',
            status: '',
            open_date: '',
            closed_date: '',
        }, )
    }

    render() {
        return (
            <div className="new-matter-form">
                <h2>New Matter:</h2>
          
                    <label>Case Title:</label><br />
                    <input name="case_title" type="text" value={this.state.case_title} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Lead Attorney:</label><br />
                    <input name="lead_attorney" type="text" value={this.state.lead_attorney} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Associate Attorney:</label><br />
                    <input name="associate_attorney" type="text" value={this.state.associate_attorney} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Client:</label><br />
                    <input name="client" type="text" value={this.state.client} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>File Number:</label><br />
                    <input name="file_number" type="text" value={this.state.file_number} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                
                    <label>Case Description:</label><br />
                    <textarea name="case_description" type="text" value={this.state.case_description} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Practice Area:</label><br />
                    <input name="practice_area" type="text" value={this.state.practice_area} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Status:</label><br />
                    <input name="status" type="text" value={this.state.status} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Date Opened:</label><br />
                    <input name="open_date" type="text" value={this.state.open_date} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Date Closed:</label><br />
                    <input name="closed_date" type="text" value={this.state.closed_date} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <br />
                   
                    <button onClick={this.handleSubmit}>Add New Matter</button>
                    
            
                <br />
            </div>
        )
    }

}

export default connect (null, { addMatter })(MatterForm);

