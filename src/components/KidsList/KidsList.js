import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import swal from 'sweetalert';
import './KidsList.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: '#4a148c',
    },
  },
});



class KidsList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_KIDS' });
  }

  goToAddPage = () => {
    this.props.history.push("/add-new-child");
  }

  goToKidsDetails = (kid) => {
    console.log(kid);
    this.props.dispatch({ type: 'SET_DETAILS', payload: kid });
    this.props.history.push("/details");
  }


  handleChildDelete = (kidId) => {
    swal({
      title: "Are you sure?",
      text: "Click OK if you wish to permanently delete this child",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("This child has been deleted");
        this.props.dispatch({ type: 'DELETE_KID', payload: kidId })
      } 
    });
  }

  render() {
    return (
      <>
      <div class="kidslist">
        <div>
          <h1 id="list">
            Kids List!
          </h1>
          <h2>
            Click on a name to see more details for that child
          </h2>
        </div>
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <Paper className="root">
              <div className="tableWrapper">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>NAME</TableCell>
                      <TableCell>AGE</TableCell>
                      <TableCell>GENDER</TableCell>
                      <TableCell>DELETE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.reduxState.kids.map((kid) => <TableRow><TableCell>{kid.id}</TableCell>
                      <TableCell key={kid.id} onClick={() => this.goToKidsDetails(kid)}>{kid.firstname}</TableCell><TableCell>{kid.age}</TableCell>
                      <TableCell>{kid.gender}</TableCell><TableCell>
                      <Button key={kid.id} onClick={() => this.handleChildDelete(kid.id)} color="primary">Delete</Button></TableCell></TableRow>)}
                  </TableBody>

                </Table>
              </div>
            </Paper>
            <br />
            <Button onClick={this.goToAddPage} variant="contained">Add Child</Button>
          </React.Fragment>
        </MuiThemeProvider>
        </div>
      </>

    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(KidsList);