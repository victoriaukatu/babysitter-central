import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
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
                    this.props.dispatch({ type: 'DELETE_SUMMARY', payload: summaryId })
                }
            });
    }


    render() {
        return (
            <>
                <div>
                    <div>
                        <h1>Click on the date to see a summary of babysitting for that day</h1>
                    </div>
                    <div>
                        {this.props.reduxState.summaries.map((summary) => 
                            <>
                            <Card key={summary.id} onClick={() => this.goToDetails(summary)}>{summary.date}
                            <Button key={summary.id} onClick={() => this.handleSummaryDelete(summary.id)} color="primary">Delete</Button></Card>
                            </>)}
                    </div>
                        <Button onClick={this.addSummary} variant="contained">Add Babysitting Summary</Button>
                    
                </div>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Summaries);