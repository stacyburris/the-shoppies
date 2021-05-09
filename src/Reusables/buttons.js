import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';
import './buttons.scss';

   const styles = () => ({
    root: {
      color: deepPurple[400],
      backgroundColor: deepPurple[400],
      '&:hover': {
        backgroundColor: deepPurple[700],
      },
        margin: {
        margin: 60,
    },  
    },
    // root: {
    //   color: pink[200],
    //   backgroundColor: pink[200],
    //   '&:hover': {
    //     backgroundColor: pink[400],
    //   },
    //     margin: {
    //     margin: 60,
    // },  
    // },
    // root: {
    //   color: purple[400],
    //   backgroundColor: purple[400],
    //   '&:hover': {
    //     backgroundColor: purple[700],
    //   },
    //     margin: {
    //     margin: 60,
    // },  
    // },
  });

function MyButton(props){
  return(
    <>
    <Button className='text-color'
    variant="contained" color="primary" {...props}>
    </Button>
 </>
  );
}  
  export default withStyles(styles)(MyButton);
