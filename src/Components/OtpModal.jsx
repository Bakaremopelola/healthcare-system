import React, { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const OtpModal = ({ show, handleClose, handleVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move focus to the next input field if not the last one
    if (e.target.value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp === '123456') {
      handleVerify();
      handleClose();
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className='otp-modal' closeButton>
        <Modal.Title>Verify OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body className='otp-modal'>
        <p>Please enter the OTP sent to your registered mobile number.</p>
        <Form onSubmit={handleSubmit} className="otp-form">
          <div className="d-flex justify-content-center otp-inputs">
            {otp.map((digit, index) => (
              <Form.Control
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <Button variant="success" type="submit" className="mt-3" block>
            Verify
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OtpModal;
