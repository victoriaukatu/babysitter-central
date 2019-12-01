import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="user-container">
    <center>
      <div className="position">
        <div className="card">
          <h1 className="welcome">
            Welcome, {props.user.username}!
        </h1>
          <h3>Babysitters, please use this as a resource to stay organized!</h3>
          <h4>Parents: Please navigate to the Summaries tab to view how babysitting went on a given day!</h4>
          <LogOutButton className="log-in" />
        </div>
      </div>
    </center>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
