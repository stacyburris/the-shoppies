import React, {useContext} from 'react';
import {NominateContext} from '../../hooks/Context';

const RemoveButton = (props) => {
    const {id} = props
    const {setNominations} = useContext(NominateContext);

    function removeNomination() {
        let dataStored = JSON.parse(localStorage.getItem('nominations'));
        // Returns array of nominations that don't match the current nomination
        dataStored = dataStored.filter(item => item.movieNomination !== id);

        localStorage.setItem('nominations',[JSON.stringify(dataStored)]);
        setNominations(dataStored)

    }
    return (
        <button 
        className='remove' 
        onClick={() => removeNomination()}>
        <span 
            className='label'>
            Remove 
        </span>
    </button>
    )
}

export default RemoveButton;