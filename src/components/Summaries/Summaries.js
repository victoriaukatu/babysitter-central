import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import './Summaries.css';


class Summaries extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_SUMMARIES' });
    }

    addSummary = () => {
        this.props.history.push('/add-new-summary');
    }

    goToDetails = (summary) => {
        console.log(summary);
        this.props.dispatch({ type: 'SET_SUMMARY_DETAILS', payload: summary });
        this.props.history.push("/summarydetails");
    }

    handleSummaryDelete = (summaryId) => {
        swal({
            title: "Are you sure?",
            text: "Click OK if you wish to permanently delete this babysitting report",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("This report has been deleted");
                    this.props.dispatch({ type: 'DELETE_SUMMARY', payload: summaryId });
                    this.props.history.push('/summaries');
                }
            });
    }


    render() {
        return (
            <>
                <center>
                <div>
                    <div>
                        <h1>Instructions:</h1>
                        <p>
                            Babysitters -- Write a brief summary of how babysitting went. Include who you babysat and any notes
                            that parents would find useful.
                        </p>
                        <p>
                            Parents -- Refer to these notes anytime and follow up with the babysitter as needed for more information.
                        </p>
                    </div>
                    <div className="container">
                        {this.props.reduxState.summaries.map((summary) => 
                            <>
                            <div className="cards" key={summary.id} onClick={() => this.goToDetails(summary)}>{summary.date}
                            <Button key={summary.id} onClick={() => this.handleSummaryDelete(summary.id)} variant="outlined" color="primary">Delete</Button></div>
                            </>)}
                    </div>
                        <Button onClick={this.addSummary} variant="contained">Add Babysitting Report</Button>
                    
                </div>
                </center>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default withRouter(connect(mapStateToProps)(Summaries));