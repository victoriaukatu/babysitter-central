import React, { Component } from 'react';
import { connect } from 'react-redux';


class Summaries extends Component {

render() {
    return(
        <div>
            <h1>Click on the date to see a summary of babysitting for that day</h1>
        </div>
    )
}

}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  

  export default connect(mapStateToProps)(Summaries);