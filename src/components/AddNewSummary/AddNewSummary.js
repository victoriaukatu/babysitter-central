import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

class AddNewSummary extends Component {
    
    backToSummaries = () => {
        this.props.history.push("/summaries");
    }

    state = {
        date: '',
        summary: '',
    }

    handleChange = (property) => (event) => {
        this.setState({
            [property]: event.target.value,
        });
    }

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
        } else {
            alert('Could not submit. Please complete all input fields and try again.');
        }
    }


    render() {
        return (
            <>
            <h1>New Summary</h1>
            <br/>
            <form onSubmit={this.handleSubmit}>
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

export default connect(mapStateToProps)(AddNewSummary);