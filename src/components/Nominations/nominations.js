import React from 'react'
import { Media } from 'react-bootstrap'
import MyButton from '../../Reusables/buttons';
import './nominations.scss';


const Nominations = (props) => {
// nominations = from state 
// removeNominatedMovie function
// clearNominations set to empty array and clear local storage
    const { nominations, removeNominatedMovie, clearNominations } = props
    const nominationsLeft = 5 - nominations.length


 // Tracks Nominations and Renders Components on Page 
 // Ability to Clear Nominations with One Click
 // Map over Nominations and Display or Remove Nomination
    return(
        <div className='nom-container'>
            <h2 className='sub-header-nom'>Nominations {nominations.length >= 1 ? <MyButton onClick={clearNominations}>
            Clear Nominations</MyButton> : null }</h2>

            {nominationsLeft > 0 ? 
                <h4 id='results'>You have {nominationsLeft} {nominationsLeft === 1 ? 'nomination' : 'nominations'} left</h4>
                :
                <h4 id='results'>You Nominated 5 Movies!</h4>
            } 

            {nominations.length > 0 ?
                nominations.map(nominate => 
                    <div className='nominations'>
                        <Media>
                            <img
                                width={75}
                                height={90}
                                className="mr-3"
                                src={nominate.Poster}
                                alt={nominate.Title}
                            />
                            <Media.Body className='nomination-text'>
                                <h4 className='nomination-header'>{nominate.Title}</h4>
                                <p><i>{nominate.Year}</i></p>
                            </Media.Body>
                            <MyButton onClick={() => removeNominatedMovie(nominate)}>Remove</MyButton>
                        </Media>
                    </div>
                )
                :
                null
            }
        </div>
    )
}

export default Nominations;