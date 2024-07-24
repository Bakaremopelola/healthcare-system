import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './AppointmentSchedule.css';

const AppointmentSchedule = ({ show, handleClose, onSchedule }) => {
  const [doctor, setDoctor] = useState('');
  const [reason, setReason] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSchedule = () => {
    const appointment = {
      doctor,
      reason,
      appointmentDate,
      status: 'Scheduled',
    };
    onSchedule(appointment);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className='otp-modal' closeButton>
        <Modal.Title>Schedule Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body className='otp-modal'>
        <Form>
          <Form.Group controlId="formDoctor">
            <Form.Label>Doctor</Form.Label>
            <Form.Control
              as="select"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="" disabled>Select a doctor</option>
              <option value="Dr. Adam Smith">Dr. Adam Smith</option>
              <option value="Dr. Michael May">Dr. Michael May</option>
              <option value="Dr. Jeanette Lea">Dr. Jeanette Lea</option>
              <option value="Dr. Harish Sharma">Dr. Harish Sharma</option>
              <option value="Dr. Aiyana Cruz">Dr. Aiyana Cruz</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formReason">
            <Form.Label>Reason for Appointment</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Annual monthly check-up"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAppointmentDate" >
            <Form.Label>Expected Appointment Date</Form.Label>
            <Form.Control
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='otp-modal'>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSchedule}>
          Schedule Appointment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AppointmentSchedule;
