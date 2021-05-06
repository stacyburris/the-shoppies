import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import './buttons.scss';

   const styles = () => ({
    root: {
      color: purple[500],
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
        margin: {
        margin: 50,
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
