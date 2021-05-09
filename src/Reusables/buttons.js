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
    },
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
