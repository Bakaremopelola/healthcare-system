import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
import './Dashboard.css'; // Assuming you have some custom styles
import AppointmentSchedule from './AppointmentSchedule';
import CancelAppointmentModal from './CancelAppointmentModal'; // Import the CancelAppointmentModal
import logo from '../assets/Logo.svg';

const Dashboard = ({ appointments, onSchedule, onAttemptClose }) => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleShowScheduleModal = () => setShowScheduleModal(true);
  const handleCloseScheduleModal = () => setShowScheduleModal(false);

  const handleShowCancelModal = (appointment) => {
    setSelectedAppointment(appointment);
    setShowCancelModal(true);
  };
  const handleCloseCancelModal = () => setShowCancelModal(false);

  const handleSchedule = (appointment) => {
    handleCloseScheduleModal();
    onSchedule(appointment);
  };

  const handleCancel = (reason) => {
    if (selectedAppointment) {
      // Update the appointment status to 'Cancelled' with reason
      const updatedAppointments = appointments.map(app => 
        app === selectedAppointment ? { ...app, status: 'Cancelled', reason } : app
      );
      onAttemptClose(updatedAppointments); // Update the appointment list
    }
  };

  return (
    <Container fluid className="dashboard">
      <div className='long'>
        <img src={logo} alt="Logo" className='ded'/>
        <div className='mide'>
          <Button className='primary solid' onClick={handleShowScheduleModal}>Schedule appointment</Button>
          <Button className='primary solid' onClick={() => handleShowCancelModal(null)}>Cancel appointment</Button>
        </div>
      </div>
      <Row>
        <Col>
          <h2>Welcome, Admin</h2>
          <p>Start your day with managing new appointments</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className='titis'>Total number of scheduled appointments</Card.Title>
              <Card.Text as="div">
                <h1>{appointments.filter(app => app.status === 'Scheduled').length}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className='titis'>Total number of pending appointments</Card.Title>
              <Card.Text as="div">
                <h1>{appointments.filter(app => app.status === 'Pending').length}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className='titis'>Total number of cancelled appointments</Card.Title>
              <Card.Text as="div">
                <h1>{appointments.filter(app => app.status === 'Cancelled').length}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 des">
        <Col className='des2'>
          <Card className='des2'>
            <Card.Body className='des3'>
              <Table striped bordered hover className='des3'>
                <thead className='des3'> 
                  <tr className='des3'>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Doctor</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='des3'>
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td className='slag'>{appointment.patient}</td>
                      <td className='slag'>{appointment.date}</td>
                      <td className='slag'>{appointment.status}</td>
                      <td className='slag'>{appointment.doctor}</td>
                      <td>
                        <Button variant="success" className="ml-2" onClick={handleShowScheduleModal}>Schedule</Button>
                        <Button variant="danger" className="ml-2" onClick={() => handleShowCancelModal(appointment)}>Cancel</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <AppointmentSchedule
        show={showScheduleModal}
        handleClose={handleCloseScheduleModal}
        onSchedule={handleSchedule}
      />
      <CancelAppointmentModal
        show={showCancelModal}
        handleClose={handleCloseCancelModal}
        onCancel={handleCancel}
      />
    </Container>
  );
};

export default Dashboard;
