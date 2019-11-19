import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class KidsList extends Component {

    render() {
        return (
            <div>
                <h1 id="list">
                    The following list is the kids that you babysit!
                </h1>
                <LogOutButton className="log-in" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(KidsList);