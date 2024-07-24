import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import DropdownComponent from './DropDown';
import appoint from '../assets/appointment.png';
import './AppointmentForm.css';
import logo from '../assets/Logo.svg';

const doctors = {
  Cardiology: ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Taylor", "Dr. Moore"],
  Neurology: ["Dr. Brown", "Dr. Davis", "Dr. Miller", "Dr. Wilson", "Dr. Anderson"],
  Orthopedics: ["Dr. Martinez", "Dr. Hernandez", "Dr. Clark", "Dr. Lewis", "Dr. Robinson"],
  Pediatrics: ["Dr. Adams", "Dr. Baker", "Dr. Carter"],
  Audiology: ["Dr. Evans", "Dr. Foster"],
  Endocrinology: ["Dr. Garcia", "Dr. Harris"],
  Dermatology: ["Dr. Johnson", "Dr. King"],
  Dentistry: ["Dr. Lee", "Dr. Martin"],
  GeneralPractice: ["Dr. Nelson", "Dr. Owens"],
  Gynecology: ["Dr. Perez", "Dr. Quinn"],
  Obstetrics: ["Dr. Roberts", "Dr. Scott"],
  Psychiatry: ["Dr. Vega", "Dr. White"],
  Urology: ["Dr. Xiong", "Dr. Young"],
  Radiology: ["Dr. Zane", "Dr. Alvarez"]
};

const AppointmentFormPage = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    specialty: '',
    doctor: '',
    reason: '',
    expectedDate: '',
    comments: ''
  });

  const handleDropdownSelect = (field) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', formData);
    onSubmit();  // Notify parent component that form is submitted
  };

  const getDoctors = (specialty) => {
    return specialty ? doctors[specialty] : [];
  };

  return (
    <div className='mainwrapper'>
      <Container className="my-5">
        <img src={logo} className="logo" alt="" />
        <h1 className='tits'>Hey there 👋</h1>
        <p className='tit2'>Request a new appointment in 10 seconds</p>
        <Form className='myform' onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className='input1'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className='input1'
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                className='input1'
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                className='input1'
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="formSpecialty" className="mb-3">
            <Form.Label>Specialty</Form.Label>
            <DropdownComponent
              onSelect={handleDropdownSelect('specialty')}
              options={Object.keys(doctors)}
              title="Select a specialty"
            />
          </Form.Group>
          <Form.Group controlId="formDoctor" className="mb-3">
            <Form.Label>Doctor</Form.Label>
            <DropdownComponent
              onSelect={handleDropdownSelect('doctor')}
              options={getDoctors(formData.specialty)}
              title="Select a doctor"
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="reason">
              <Form.Label>Reason for appointment</Form.Label>
              <Form.Control
                type="text"
                className='input1'
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="e.g. Annual monthly check-up"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="notes">
              <Form.Label>Additional comments/notes</Form.Label>
              <Form.Control
                type="text"
                name="notes"
                className='input1'
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g. Prefer afternoon appointments, if possible"
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="formExpectedDate" className="mb-3">
            <Form.Label>Expected Appointment Date</Form.Label>
            <Form.Control
              type="date"
              className='input1'
              name="expectedDate"
              value={formData.expectedDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formComments" className="mb-3">
            <Form.Label>Additional Comments or Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="comments"
              className='input1'
              value={formData.comments}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit" block>
            Submit and continue
          </Button>
        </Form>
      </Container>
      <img src={appoint} className="appoint" alt="" />
    </div>
  );
};

export default AppointmentFormPage;
