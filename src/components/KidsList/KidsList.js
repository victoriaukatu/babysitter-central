import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import swal from 'sweetalert';

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


const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  }
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
        <div>
          <h1 id="list">
            The following list is the kids that you babysit!
          </h1>
        </div>
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <Paper className="root">
              <div className="tableWrapper">
                <h2>List of Kids</h2>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Delete</TableCell>
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
            <Button onClick={this.goToAddPage} color="secondary" variant="contained">Add Child</Button>
          </React.Fragment>
        </MuiThemeProvider>
      </>

    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(KidsList);