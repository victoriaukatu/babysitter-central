import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


class Summaries extends Component {
componentDidMount() {
    this.props.dispatch({ type: 'GET_SUMMARIES' });
}

addSummary = () => {
    this.props.history.push('/add-new-summary');
}

render() {
    return(
        <>
        <div>
            <h1>Click on the date to see a summary of babysitting for that day</h1>
        </div>
        <Card>
        <h1>DATE</h1>
        </Card>
        <br/>
        <Button onClick={this.addSummary} variant="contained">Add Babysitting Summary</Button>
        </>
    )
}

}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  

  export default connect(mapStateToProps)(Summaries);