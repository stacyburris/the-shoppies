import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../Alerts/alert.scss';
import MyButton from '../../Reusables/buttons';

const NominationsComplete = () => {

  const [ show, setShow ] = useState(true)

  const handleSubmit = () => {
    setShow(false)
  }
  return (
    <>
      <Modal className='alert-modal' centered='true' show={show} onHide={handleSubmit}>
        <Modal.Header>
          <Modal.Title className='modal-title'>Congratulations! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've Finished Nominating Movies 🏆 
        </Modal.Body>
        <Modal.Footer>
          <MyButton
            className='nominate' onClick={handleSubmit}>
               Close
            </MyButton> 
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default NominationsComplete;
