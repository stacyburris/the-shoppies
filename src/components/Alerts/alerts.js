
import React, {useState} from "react";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertModel = () => {
    const [isValid, setIsValid] = useState(false);
    const [value, setValue] = useState("");

	function handleSubmission(){
	if (value.length > 3 || value.length < 3){ 
        setIsValid(false)
      }else{
        setIsValid(true)
      }
    }
return (
<div className="App">
{isValid 
      ? <Alert variant="success">Hurray! You're a genius.</Alert>
      : <Alert variant="danger">Oops! Try again</Alert>
}
  <div>
      <h1>Word Master</h1>
      <p>Enter A Three Letter Word</p>
    <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
    <button onClick={handleSubmission}>Submit</button>
    </div>
    </div>
  );
}

export default AlertModel;

//////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react'
//import Alert from 'react-bootstrap/Alert';

// const AlertModal = () => {

//   const [ show, setShow ] = useState(true)

//   const handleSubmission = () => {
//     setShow(false)
//   }

//   return (
//     <>
//       <Modal contentClassName='modal' centered='true' show={show} onHide={handleSubmission}>
//         <Modal.Header closeButton>
//           <Modal.Title className='modal-title'>Congratulations! </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           You've Completed your Voting!
//         </Modal.Body>
//         <Modal.Footer>
//           <Button className='nominate' onClick={handleSubmission}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }

// export default AlertModal