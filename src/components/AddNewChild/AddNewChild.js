import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNewChild extends Component {

    render() {
        return (
            <>
                <div>
                    <h1>New Child?</h1>
                    <h2>Please complete the form below and click submit to add a new child to the roster</h2>
                </div>
                <input placeholder="Name"></input>
                <input placeholder="Age"></input>
                <input placeholder="Profile Picture"></input>
                <select>
                    <option>Female</option>
                    <option>Male</option>
                </select>
                <input placeholder="Allergies"></input>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <input placeholder="Notes"></input>
                <br/>
                <h2>Parent Contact Information:</h2>
                <input placeholder="Parent Name"></input>
                <input placeholder="Phone"></input>
                <button>Cancel</button>
                <button>Submit</button>
            </>
        )

    }
}

export default connect()(AddNewChild);