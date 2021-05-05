import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../App.scss';

const NominationsComplete = () => {

  const [ show, setShow ] = useState(true)

  const handleSubmit = () => {
    setShow(false)
  }
 
  return (
    <>
      <Modal contentClassName='modal' centered='true' show={show} onHide={handleSubmit}>
        <Modal.Header>
          <Modal.Title className='modal-title'>Congratulations! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've Finished Nominating Movies 🏆 
        </Modal.Body>
        <Modal.Footer>
          <Button className='nominate' onClick={handleSubmit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default NominationsComplete;
