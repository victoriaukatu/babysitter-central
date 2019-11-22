import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class KidsDetails extends Component {
    state = {
        editable: true,
        updatedChild: {
            firstname: '',
            age: '',
            picture: '',
            gender: '',
            allergies: '',
            nap: '',
            pottytrained: '',
            notes: '',
            parentname: '',
            phone: '',
        }
    }

    backToList = () => {
        this.props.history.push('/kids-list');
    }

    cancelEdit = () => {
        this.props.history.push('/kids-list');
    }

    editMode = () => {
        this.setState({
            editable: false,
            updatedChild: this.props.reduxState.details
        })
    }

    handleChange = (property) => (event) => {
        this.setState({
            updatedChild: {
                ...this.state.updatedChild,
                [property]: event.target.value
            }
        })
    }

    saveChanges = () => {
        console.log(this.state.updatedChild);
        this.props.dispatch({type: 'UPDATE_DETAILS', payload: this.state.updatedChild})
        this.setState({
            editable: true,
        })
    }

    render() {
        return (
            <>
                {this.state.editable &&
                    <>
                    <h1>{this.props.reduxState.details.firstname}</h1>
                    <h2>Personal Information:</h2>
                    <h3>Age: {this.props.reduxState.details.age}</h3>
                    <h3>Gender: {this.props.reduxState.details.gender}</h3>
                    <h3>Allergies: {this.props.reduxState.details.allergies}</h3>
                    <h3>Does he/she need a nap?: {this.props.reduxState.details.nap}</h3>
                    <h3>Is he/she potty-trained?: {this.props.reduxState.details.pottytrained}</h3>
                    <h3>Notes/Any special needs?: {this.props.reduxState.details.notes}</h3>
                    <br />
                    <h2>Parent's Contact Information:</h2>
                    <h3>Parent's name: {this.props.reduxState.details.parentname}</h3>
                    <h3>Parent's phone number: {this.props.reduxState.details.phone}</h3>
                    <Button color="secondary" onClick={this.backToList}>Back to List</Button>
                    <Button color="secondary" onClick={this.editMode}>Edit</Button>
                    </>
                }
                {this.state.editable === false && 
                     <>
                     <h1>{this.props.reduxState.details.firstname}</h1>
                     <h2>Personal Information:</h2>
                     <h3>Age: <input type="text" value={this.state.updatedChild.age} onChange={this.handleChange('age')}/></h3>
                     <h3>Gender: <input type="text" value={this.state.updatedChild.gender} onChange={this.handleChange('gender')}/></h3>
                     <h3>Allergies: <input type="text" value={this.state.updatedChild.allergies} onChange={this.handleChange('allergies')}/></h3>
                     <h3>Does he/she need a nap?: <input type="text" value={this.state.updatedChild.nap} onChange={this.handleChange('nap')}/></h3>
                     <h3>Is he/she potty-trained?: <input type="text" value={this.state.updatedChild.pottytrained} onChange={this.handleChange('pottytrained')}/></h3>
                     <h3>Notes/Any special needs?: <input type="text" value={this.state.updatedChild.notes} onChange={this.handleChange('notes')}/></h3>
                     <br />
                     <h2>Parent's Contact Information:</h2>
                     <h3>Parent's name: <input type="text" value={this.state.updatedChild.parentname} onChange={this.handleChange('parentname')}/></h3>
                     <h3>Parent's phone number: <input value={this.state.updatedChild.phone} onChange={this.handleChange('phone')}/></h3>
                     <Button color="secondary" onClick={this.cancelEdit}>Cancel</Button>
                     <Button color="secondary" onClick={this.saveChanges}>Save</Button>
                <pre>{JSON.stringify(this.state.updatedChild, null, 2)}</pre>
                     </>
                }

                
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(KidsDetails));