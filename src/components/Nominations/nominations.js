import React from 'react'
import { Media, Button } from 'react-bootstrap'

const Nominations = (props) => {
// nominations = from state 
// removeNominatedMovie function
// clearNominations set to empty array and clear local storage
    const { nominations, removeNominatedMovie, clearNominations } = props
    const nominationsLeft = 5 - nominations.length
 
    return(
        <div>
            <h3 className='sub-header'>Nominations {nominations.length >= 1 ? <Button onClick={clearNominations} variant='dark'>Clear Nominations</Button> : null }</h3>
            {nominationsLeft > 0 ?
                <h5 className='nominationsLeft'>You have {nominationsLeft} {nominationsLeft === 1 ? 'nomination' : 'nominations'} left</h5>
                :
                <h5 className='nominationsLeft'>You Nominated 5 Movies!</h5>
            } 
            {nominations.length > 0 ?
                nominations.map(nominate => 
                    <div className='nominations'>
                        <Media>
                            <img
                                width={64}
                                className="mr-3"
                                src={nominate.Poster}
                                alt={nominate.Title}
                            />
                            <Media.Body className='nominee-text'>
                                <h5 className='nominee-header'>{nominate.Title}</h5>
                                <p>{nominate.Year}</p>
                            </Media.Body>
                            <Button variant="danger" onClick={() => removeNominatedMovie(nominate)}>Remove</Button>
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