import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    console.log(op);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
        <Button style={{float:'right'}} variant="primary" className='mt-4' onClick={handleShow}>
       Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                <ListGroup.Item>Monday :&nbsp; {op.Monday}</ListGroup.Item>
                <ListGroup.Item>Tuesday :&nbsp; {op.Tuesday}</ListGroup.Item>
                <ListGroup.Item>Wednesday :&nbsp; {op.Wednesday}</ListGroup.Item>
                <ListGroup.Item>Thursday :&nbsp; {op.Thursday}</ListGroup.Item>
                <ListGroup.Item>Friday :&nbsp; {op.Friday}</ListGroup.Item>
                <ListGroup.Item>Saturday :&nbsp; {op.Saturday}</ListGroup.Item>
                <ListGroup.Item>Sunday :&nbsp; {op.Sunday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop