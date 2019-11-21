import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class KidsDetails extends Component{
    backToList = () => {
        this.props.history.push('/kids-list');
    }

render() {
    return (
        <Button onClick={this.backToList}>Back to List</Button>
    )
}


}





export default connect()(KidsDetails);