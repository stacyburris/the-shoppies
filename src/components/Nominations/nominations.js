import React from 'react'
import { Media } from 'react-bootstrap'
import './nominations.scss';
import '../../App.scss';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';



const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(purple[500]),
          backgroundColor: purple[500],
          '&:hover': {
            backgroundColor: purple[700],
          },
        },
      }))(Button);
      
      
      
const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));




const Nominations = (props) => {
// nominations = from state 
// removeNominatedMovie function
// clearNominations set to empty array and clear local storage
    const { nominations, removeNominatedMovie, clearNominations } = props
    const nominationsLeft = 5 - nominations.length




 // Tracks Nominations and Renders Components on Page 
 // Ability to Clear Nominations with One Click
 // Map over Nominations and Display or Remove Nomination
 const classes = useStyles();
    return(
        <div>

                    {/* <ColorButton variant='contained' className={classes.margin} onClick={clearNominations}>
                      Clear Nominations</ColorButton> : null } */}



            <h2 className='sub-header-nom'>Nominations {nominations.length >= 1 ? <ColorButton variant='contained' className={classes.margin} onClick={clearNominations}>
                      Clear Nominations</ColorButton> : null }</h2>

            {nominationsLeft > 0 ? 
                <h4 className='first-countdown'>You have ({nominationsLeft}) {nominationsLeft === 1 ? 'nomination' : 'nominations'} left</h4>
                :
                <h4 className='noms-left'>You Nominated 5 Movies!</h4>
            } 

            {nominations.length > 0 ?
                nominations.map(nominate => 
                    <div className='nominations'>
                        <Media>
                            <img
                                width={68}
                                className="mr-3"
                                src={nominate.Poster}
                                alt={nominate.Title}
                            />
                            <Media.Body className='nomination-text'>
                                <h4 className='nomination-header'>{nominate.Title}</h4>
                                <p><i>{nominate.Year}</i></p>
                            </Media.Body>
                            <Button variant='light' onClick={() => removeNominatedMovie(nominate)}>Remove</Button>
                        </Media>
                    </div>
                )
                :
                null
            }
        </div>
    )
}

export default Nominations