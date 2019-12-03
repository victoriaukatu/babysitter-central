import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import './AddNewChild.css';

class AddNewChild extends Component {

    // when clicked, bring user back to the full list of kids
    backToKidsList = () => {
        this.props.history.push("/kids-list");
    }

    state = {
        firstname: '',
        age: '',
        picture: '',
        gender: 'true',
        allergies: '',
        nap: 'false',
        pottytrained: 'false',
        notes: '',
        parentname: '',
        phone: '',
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

        if (this.state.firstname && this.state.age && this.state.picture && this.state.gender && this.state.allergies && this.state.nap && this.state.pottytrained
            && this.state.parentname && this.state.phone) {
            swal("Successfully added!", "", "success");
            this.props.dispatch({
                type: 'ADD_NEW_CHILD',
                payload: {
                    firstname: this.state.firstname,
                    age: this.state.age,
                    picture: this.state.picture,
                    gender: this.state.gender,
                    allergies: this.state.allergies,
                    nap: this.state.nap,
                    pottytrained: this.state.pottytrained,
                    notes: this.state.notes,
                    parentname: this.state.parentname,
                    phone: this.state.phone,
                },
            });
            this.props.history.push('/kids-list');
        } else {
            swal('Error! Could not submit. Please complete all input fields and try again.');
        }
    }


    render() {
        return (
            <>
                {/* The user fills out this form with the new child information */}
                <div class="title">
                    <h1>New Child?</h1>
                    <h2>Please complete the form below and click submit to add a new child to the roster</h2>
                </div>
                <form class="newchildform" onSubmit={this.handleSubmit}>
                    Name <input onChange={this.handleChange('firstname')} name="firstname" />
                    <br />
                    Age <input onChange={this.handleChange('age')} name="age" />
                    <br />
                    Profile Picture (image url) <input onChange={this.handleChange('picture')} name="profilepicture" />
                    <br />
                    Gender <br />
                    <select value={this.state.gender} onChange={this.handleChange('gender')}>
                        <option value='true'>Female</option>
                        <option value='false'>Male</option>
                    </select>
                    <br />
                    Allergies <input onChange={this.handleChange('allergies')} name="allergies" />
                    <br />
                    Does he/she need a nap in the afternoon?
                    <select value={this.state.nap} onChange={this.handleChange('nap')}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                    <br />
                    Is he/she potty-trained?
                    <select value={this.state.pottytrained} onChange={this.handleChange('pottytrained')}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                    <br />
                    Notes/Any special needs?
                     <textarea onChange={this.handleChange('notes')} name="notes" />
                    <br />
                    <h2>Parent Contact Information:</h2>
                    Parent Name <input onChange={this.handleChange('parentname')} name="parentname" />
                    Phone Number <input onChange={this.handleChange('phone')} name="phone" />
                    <br />
                    <input type='submit' value='Submit' />
                    <button onClick={this.backToKidsList}>Cancel</button>
                </form>

            </>
        )

    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(AddNewChild));