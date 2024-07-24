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
        <img src={logo} alt="Logo" />
        <div>
          <Button className='primary' onClick={handleShowScheduleModal}>Schedule appointment</Button>
          <Button className='primary' onClick={() => handleShowCancelModal(null)}>Cancel appointment</Button>
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
              <Card.Title>Total number of scheduled appointments</Card.Title>
              <Card.Text as="div">
                <h1>{appointments.filter(app => app.status === 'Scheduled').length}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total number of pending appointments</Card.Title>
              <Card.Text as="div">
                <h1>{appointments.filter(app => app.status === 'Pending').length}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total number of cancelled appointments</Card.Title>
              <Card.Text as="div">
                <h1>{appointments.filter(app => app.status === 'Cancelled').length}</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Doctor</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td>{appointment.patient}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.status}</td>
                      <td>{appointment.doctor}</td>
                      <td>
                        <Button variant="success" onClick={handleShowScheduleModal}>Schedule</Button>
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
