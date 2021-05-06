import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { cyan } from '@material-ui/core/colors';
import './buttons.scss';

   const styles = () => ({
    root: {
      color: cyan[600],
      backgroundColor: cyan[600],
      '&:hover': {
        backgroundColor: cyan[800],
      },
        margin: {
        margin: 60,
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
