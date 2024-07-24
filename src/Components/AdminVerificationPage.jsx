import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminVerificationPage = ({ onSubmit, onAttemptClose }) => {
  const [passkey, setPasskey] = useState('');
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPasskey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle passkey verification logic here
    console.log('Passkey entered:', passkey);
    onSubmit();
    setShowModal(false);
    navigate('/dashboard'); // Navigate to the dashboard after verification
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: '#333' }}>
      <Modal show={showModal} onHide={onAttemptClose} centered>
        <Modal.Header className='otp-modal' closeButton>
          <Modal.Title>Access Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body className='otp-modal'>
          <p>To access the admin page, please enter the passkey:</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                value={passkey}
                onChange={handleChange}
                placeholder="Enter admin passkey"
                required
                className="text-center"
                maxLength="6"
                style={{ fontSize: '2rem', letterSpacing: '1rem' }}
              />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Enter admin passkey
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminVerificationPage;
