import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './SummariesDetails.css';

class SummariesDetails extends Component {
    state = {
        editable: true,
        updatedSummary: {
            date: '',
            summary: '',
        },
    }

    backToList = () => {
        this.props.history.push('/summaries');
    }

    cancelEdit = () => {
        this.props.history.push('/summaries');
    }

    editMode = () => {
        this.setState({
            editable: false,
            updatedSummary: this.props.reduxState.summarydetails
        })
    }

    handleChange = (property) => (event) => {
        this.setState({
            updatedSummary: {
                ...this.state.updatedSummary,
                [property]: event.target.value
            }
        })
    }

    saveChanges = () => {
        console.log(this.state.updatedSummary);
        this.props.dispatch({ type: 'UPDATE_SUMMARY_DETAILS', payload: this.state.updatedSummary })
        this.setState({
            editable: true,
        })
    }

    render() {
        return (
            <>
                {this.state.editable &&
                    <>
                        <div className="background">
                            <div className="text">
                                <h2>Date: {this.props.reduxState.summarydetails.date} </h2>
                                <h2>Summary: {this.props.reduxState.summarydetails.summary} </h2>
                                <Button color="secondary" variant="contained" onClick={this.backToList}>Back to List</Button>
                                <Button color="secondary" variant="contained" onClick={this.editMode}>Edit</Button>
                            </div>
                        </div>
                    </>
                }

                {this.state.editable === false &&
                    <>
                        <div className="background">
                        <div className="text">
                            <h2>Date: <input type="text" value={this.state.updatedSummary.date} onChange={this.handleChange('date')} /></h2>
                            <h2>Summary: <textarea type="text" value={this.state.updatedSummary.summary} onChange={this.handleChange('summary')} /></h2>
                            <Button color="secondary" onClick={this.cancelEdit}>Cancel</Button>
                            <Button color="secondary" onClick={this.saveChanges}>Save</Button>
                        </div>
                        </div>
                    </>
                }
            </>
        )
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(SummariesDetails));