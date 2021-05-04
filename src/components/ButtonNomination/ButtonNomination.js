import React, { useContext, useState, useLayoutEffect } from 'react';
import { NominateContext } from '../../hooks/Context';
 import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const NominateButton = (props) => {
    const {id, activeSelection, inactiveSelection} = props
    const {nominations, setNominations} = useContext(NominateContext);
    const [isNominated, setIsNominated] = useState(false);


    function addMovieNomination() {
        let currentNominations = JSON.parse(localStorage.getItem('nominations')) || [];
        let newNomination = { 'movieNomination': id }

        // Pushes New Nomination to Context State and Local Storage
        currentNominations.push(newNomination);
        localStorage.setItem('nominations', JSON.stringify(currentNominations));
        setNominations(JSON.parse(localStorage.getItem('nominations')));
        
        // Toggles Button state to disabled to prevent duplicate movie nominations
        setIsNominated(true);
    }

  // Checks if Movie is already in Local Storage
  useLayoutEffect(() => {
        
    // Returns Object if matching ID exists in Nominations
    const match = nominations.find(item => item.movieNomination === id);

    // If Match disables the movies nomination button
    (match !== undefined 
        ?   setIsNominated(true)
        :   setIsNominated(false)
    )
}, [nominations, id]); // Updates on Nomination Change


//disabled={isNominated}  // this goes after the onClick={()}
    return (
        <button 
        className='nominate-button' 
        onClick={() => addMovieNomination()} 
        >
        <span 
            className='mr-2'>
            {isNominated ? inactiveSelection : activeSelection}
        </span>
        <ThumbUpAltIcon/>
    </button> 
    )
}
export default NominateButton;