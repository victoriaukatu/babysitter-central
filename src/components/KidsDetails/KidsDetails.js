import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class KidsDetails extends Component {
    backToList = () => {
        this.props.history.push('/kids-list');
    }

    render() {
        return (
            <>
            <h1>{this.props.reduxState.details.firstname}</h1>
            <h2>Personal Information:</h2>
            <h3>Age: {this.props.reduxState.details.age}</h3>
            <h3>Gender: {this.props.reduxState.details.gender}</h3>
            <h3>Allergies: {this.props.reduxState.details.allergies}</h3>
            <h3>Does he/she need a nap?: {this.props.reduxState.details.nap}</h3>
            <h3>Is he/she potty-trained?: {this.props.reduxState.details.pottytrained}</h3>
            <h3>Notes/Any special needs?: {this.props.reduxState.details.notes}</h3>
            <br/>
            <h2>Parent's Contact Information:</h2>
            <h3>Parent's name: {this.props.reduxState.details.parentname}</h3>
            <h3>Parent's phone number: {this.props.reduxState.details.phone}</h3>


            <Button onClick={this.backToList}>Back to List</Button>
            </>
        )
    }


}


const mapStateToProps = reduxState => ({
    reduxState,
  });

export default withRouter(connect(mapStateToProps)(KidsDetails));