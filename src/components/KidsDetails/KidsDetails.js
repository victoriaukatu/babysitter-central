import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './KidsDetails.css';

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
        },
    }

    // when clicked, the user will go back the full list of kids
    backToList = () => {
        this.props.history.push('/kids-list');
    }

    // this will not save the changes and will send the user back to the full list of kids
    cancelEdit = () => {
        this.props.history.push('/kids-list');
    }

    // this allows the user to toggle between edit and display mode
    editMode = () => {
        this.setState({
            editable: false,
            updatedChild: this.props.reduxState.details
        })
    }

    // this will collect the values that the user types in the inputs and set state with those values
    handleChange = (property) => (event) => {
        this.setState({
            updatedChild: {
                ...this.state.updatedChild,
                [property]: event.target.value
            }
        })
    }

    // this will save the changes and send the updated information to the database
    saveChanges = () => {
        console.log(this.state.updatedChild);
        this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state.updatedChild })
        this.setState({
            editable: true,
        })
    }

    render() {
        return (
            <>
                {this.state.editable &&
                    <>
                        {/* display mode */}
                        <div class="grid-container">
                            <div class="leftside">
                                <h1>{this.props.reduxState.details.firstname}</h1>
                                    <h2>Parent's Contact Information:</h2>
                                    <h3>Parent's name: {this.props.reduxState.details.parentname}</h3>
                                    <h3>Parent's phone number: {this.props.reduxState.details.phone}</h3>
                            </div>
                            <div class="childinfo">
                                <img class="pic" alt="profile" src={this.props.reduxState.details.picture} />
                                    <h1>Personal Information:</h1>
                                    <h2>Age: {this.props.reduxState.details.age}</h2>
                                    <h2>Gender: {this.props.reduxState.details.gender}</h2>
                                    <h2>Allergies: {this.props.reduxState.details.allergies}</h2>
                                    <h2>Does he/she need a nap in the afternoon?: {this.props.reduxState.details.nap}</h2>
                                    <h2>Is he/she potty-trained?: {this.props.reduxState.details.pottytrained}</h2>
                                    <h2>Notes/Any special needs?: {this.props.reduxState.details.notes}</h2>
                                    <Button color="secondary" variant="contained" onClick={this.backToList}>Back to List</Button>
                                    <Button color="secondary" variant="contained" onClick={this.editMode}>Edit</Button>
                            </div>
                        </div>
                    </>
                }
                {this.state.editable === false &&
                    <>
                        {/* edit mode */}
                        <Container className="edit" maxWidth="sm">
                            <Paper>
                                <div class="editablepic">
                                    <img class="editpicture" alt="profile" src={this.state.updatedChild.picture} size={70} />
                                </div>
                                <Grid>
                                    <center>
                                    <h1>{this.props.reduxState.details.firstname}</h1>
                                    </center>
                                </Grid>
                                <center>
                                <h2>Personal Information:</h2>
                                </center>
                                <Grid>
                                    <center>
                                    <h3>Age:<input type="text" value={this.state.updatedChild.age} onChange={this.handleChange('age')} /></h3>
                                    <h3>Gender: <input type="text" value={this.state.updatedChild.gender} onChange={this.handleChange('gender')} /></h3>
                                    <h3>Allergies: <input type="text" value={this.state.updatedChild.allergies} onChange={this.handleChange('allergies')} /></h3>
                                    <h3>Does he/she need a nap?: <input type="text" value={this.state.updatedChild.nap} onChange={this.handleChange('nap')} /></h3>
                                    <h3>Is he/she potty-trained?: <input type="text" value={this.state.updatedChild.pottytrained} onChange={this.handleChange('pottytrained')} /></h3>
                                    <h3>Notes/Any special needs?: <input type="text" value={this.state.updatedChild.notes} onChange={this.handleChange('notes')} /></h3>
                                    </center>
                                </Grid>
                                <br />
                                <center>
                                <h2>Parent's Contact Information:</h2>
                                <h3>Parent's name: <input type="text" value={this.state.updatedChild.parentname} onChange={this.handleChange('parentname')} /></h3>
                                <h3>Parent's phone number: <input value={this.state.updatedChild.phone} onChange={this.handleChange('phone')} /></h3>
                                <div className="button">
                                    <Button color="secondary" variant="outlined" onClick={this.saveChanges}>Save</Button>
                                </div>
                                <div className="button">
                                    <Button color="secondary" variant="outlined" onClick={this.cancelEdit}>Cancel</Button>
                                </div>
                                </center>
                            </Paper>
                        </Container>
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