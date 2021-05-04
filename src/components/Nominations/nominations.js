//import React from 'react';
 //import { GlobalContext } from '../../store/index';
// import { MAXIMUM_NOMINATIONS } from '../../requirements';
// import {NominateContext} from '../../hooks/Context';
// // const maxCount = () => {
// //   const [state] = useContext(GlobalContext);
//   const { nominations } = state;
//    return nominations.length === MAXIMUM_NOMINATIONS ? (
// // <p>FUll</p>
// //   ) : null;
//  };

// export default maxCount;

import React from 'react';

const AddNomination = () => {


	return (
		<>
		
	
			<span className='mr-2'>Nominate</span>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				class='bi bi-heart-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</>
	) 
};

export default AddNomination;
//{props.nominationList.length}/5
// const AddNomination = (props) => {
// console.log('props on adnom page', props);
//     return (
// 		<>
		
// 	 <p className='mr-2'> <span> Nominate</span></p>
		
// 		<svg
// 			width='1em'
// 			height='1em'
// 			viewBox='0 0 16 16'
// 			class='bi bi-heart-fill'
// 			fill='red'
// 			xmlns='http://www.w3.org/2000/svg'
// 		>
// 			<path
// 				fill-rule='evenodd'
// 				d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
// 			/>
// 		</svg>

       
// </>
//     )
// }

// export default AddNomination;