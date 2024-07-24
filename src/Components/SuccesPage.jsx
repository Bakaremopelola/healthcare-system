import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SuccessPage.css';

const SuccessPage = ({ appointmentDetails, onClose }) => {
  return (
    <Container className="success-page text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>
                <img src="logo.png" alt="CarePulse Logo" className="mb-4" />
              </Card.Title>
              <Card.Text className="mb-4">
                <h3>Your <span className="highlight">appointment request</span> has been successfully {appointmentDetails.status === 'Cancelled' ? 'cancelled' : 'submitted'}!</h3>
                <p>We'll be in touch shortly to {appointmentDetails.status === 'Cancelled' ? 'acknowledge your cancellation' : 'confirm'}.</p>
              </Card.Text>
              <Card.Text className="appointment-details mt-4">
                <h5>{appointmentDetails.status === 'Cancelled' ? 'Cancelled' : 'Requested'} appointment details:</h5>
                <p><strong>Doctor:</strong> {appointmentDetails.doctor}</p>
                <p><strong>Date:</strong> {appointmentDetails.appointmentDate}</p>
                <p><strong>Reason:</strong> {appointmentDetails.reason}</p>
              </Card.Text>
              <Button variant="primary" onClick={onClose}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPage;
