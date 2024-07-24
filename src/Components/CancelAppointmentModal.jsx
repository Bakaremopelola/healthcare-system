import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CancelAppointmentModal = ({ show, handleClose, onCancel }) => {
  const [reason, setReason] = useState('');

  const handleCancel = () => {
    onCancel(reason);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='otp-modal' closeButton>
        <Modal.Title>Cancel Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body className='otp-modal'>
        <Form>
          <Form.Group controlId="cancelReason">
            <Form.Label>Reason for Cancellation</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Urgent meeting came up"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='otp-modal'>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleCancel}>
          Cancel Appointment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelAppointmentModal;
