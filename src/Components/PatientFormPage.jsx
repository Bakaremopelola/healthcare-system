import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import drawing from '../assets/drawing.png';
import './PatientFormPage.css';
import ReactLogo from '../assets/Logo.svg';





const PatientFormPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    address: '',
    occupation: '',
    guardianphonenumber: '',
    guardianname: '',
    medicalInfo: {
      height: '',
      weight: '',
      bloodType: '',
      allergies: '',
      existingConditions: ''
    },
    identification: {
      birthCertificate: '',
      idNumber: ''
    },
    consent: {
      healthCondition: false,
      dataUsage: false,
      privacyAgreement: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('medicalInfo') || name.includes('identification') || name.includes('consent')) {
      const [section, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit();  // Notify parent component that form is submitted
  };

  return (
    <div className='main'>
      <div className="mymain">
      <img src={ReactLogo} className='logo' alt="React Logo" />
        <h1 className='tits'>Welcome 👌</h1>
        <h4 className='tits'>Let us know more about yourself</h4>
        <Form  className='fomr' onSubmit={handleSubmit}>
          <h2 className='mb-4'>Personal Information</h2>
          <Row className="mb-3">
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                name="fullName" 
                className='input1'
                value={formData.fullName} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                className='input1'
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="tel"
                className='input1' 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="birthDate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control 
                type="date" 
                className='input1'
                name="birthDate" 
                value={formData.birthDate} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" className='input1' value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            
            <Form.Group as={Col} controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Occupation</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="occupation" 
                value={formData.occupation} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            
            <Form.Group as={Col} controlId="guardianname">
              <Form.Label>Emmergency Contact</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="guardianname" 
                value={formData.guardianname} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="guardianphonenumber">
              <Form.Label>phoneNumber</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="guardianphonenumber" 
                value={formData.guardianphonenumber} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Row>
          <h2 className='mb-4'>Medical Information</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="height">
              <Form.Label>Height</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="medicalInfo.height" 
                value={formData.medicalInfo.height} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control 
                type="text" 
                name="medicalInfo.weight" 
                className='input1'
                value={formData.medicalInfo.weight} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="bloodType">
              <Form.Label>Blood Type</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="medicalInfo.bloodType" 
                value={formData.medicalInfo.bloodType} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="allergies">
              <Form.Label>Allergies</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="medicalInfo.allergies" 
                value={formData.medicalInfo.allergies} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="existingConditions" className="mb-3">
            <Form.Label>Existing Conditions</Form.Label>
            <Form.Control 
              type="text" 
              className='input1'
              name="medicalInfo.existingConditions" 
              value={formData.medicalInfo.existingConditions} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <h2 className='mb-4'>Identification</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="birthCertificate">
              <Form.Label>Birth Certificate</Form.Label>
              <Form.Control 
                type="file" 
                className='input1'
                name="identification.birthCertificate" 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group as={Col} controlId="idNumber">
              <Form.Label>ID Number</Form.Label>
              <Form.Control 
                type="text" 
                className='input1'
                name="identification.idNumber" 
                value={formData.identification.idNumber} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
          </Row>
          <h2 className='mb-4'>Consent</h2>
          <Form.Group controlId="consentHealthCondition" className="mb-3">
            <Form.Check 
              type="checkbox" 
              className='text234'
              name="consent.healthCondition" 
              checked={formData.consent.healthCondition} 
              onChange={handleChange} 
              label="I confirm that my health condition information is accurate" 
              required 
            />
          </Form.Group>
          <Form.Group controlId="consentDataUsage" className="mb-3">
            <Form.Check 
              type="checkbox" 
              name="consent.dataUsage" 
              checked={formData.consent.dataUsage} 
              onChange={handleChange} 
              className='text234'
              label="I agree to the usage of my data for medical purposes" 
              required 
            />
          </Form.Group>
          <Form.Group controlId="consentPrivacyAgreement" className="mb-3">
            <Form.Check 
              type="checkbox" 
              className='text234'
              name="consent.privacyAgreement" 
              checked={formData.consent.privacyAgreement} 
              onChange={handleChange} 
              label="I agree to the privacy agreement" 
              required 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className='image-container'>
        <img src={drawing} alt='drawing' />
      </div>
    </div>
  );
};

export default PatientFormPage;
