import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import './AddNewSummary.css';

class AddNewSummary extends Component {
    
    // when clicked, this will return the user back to the list of summaries
    backToSummaries = () => {
        this.props.history.push("/summaries");
    }

    state = {
        date: '',
        summary: '',
    }

    // this will collect the values that the user types in the inputs and set state with those values
    handleChange = (property) => (event) => {
        this.setState({
            [property]: event.target.value,
        });
    }

    // this submit will send the collected information as a payload to be added to the database 
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.date && this.state.summary) {
            swal("Successfully added!", "", "success");
            this.props.dispatch({
                type: 'ADD_NEW_SUMMARY',
                payload: {
                    date: this.state.date,
                    summary: this.state.summary,
          },
            });
            this.props.history.push('/summaries');
        } else {
            swal('Error! Could not submit. Please complete all input fields and try again.');
        }
    }


    render() {
        return (
            <>
            {/* The user fills out this form with the new child information */}
            <center>
            <h1>Please use this form to create a new babysitting summary!</h1>
            </center>
            <br/>
            <form class="form" onSubmit={this.handleSubmit}>
                Date <input placeholder="e.g. Month DD, YYYY" onChange={this.handleChange('date')} name="date" />
                <br />
                Babysitting Summary <textarea onChange={this.handleChange('summary')} name="summary" />
                <br />
                <input type='submit' value='Submit' />
                <br/>
                <Button onClick={this.backToSummaries} variant="contained">Cancel</Button>
            </form>
            </>
        )
    }


}


const mapStateToProps = reduxState => ({
    reduxState,
  });

export default withRouter(connect(mapStateToProps)(AddNewSummary));