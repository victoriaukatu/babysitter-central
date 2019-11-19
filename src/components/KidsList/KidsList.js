import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { makeStyles} from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

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
                                 <TableCell>Name</TableCell>
                                 <TableCell>Age</TableCell>
                                 <TableCell>Gender</TableCell>
                                 <TableCell>Delete</TableCell>
                             </TableRow>
                         </TableHead>
                         <TableBody>
                         <TableRow>
                            <TableCell>Joe</TableCell>
                             <TableCell>9</TableCell>
                             <TableCell>Male</TableCell>
                             <TableCell>Delete</TableCell>
                        </TableRow>
                         </TableBody>

                     </Table>
                   </div>
                 </Paper>
                 <br/>
                 <Button color="secondary">Add Child</Button>
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