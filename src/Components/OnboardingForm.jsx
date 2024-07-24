import Illustration from '../assets/Illustration.png';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ReactLogo from '../assets/Logo.svg';
const OnboardingForm = ({ onShowModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onShowModal();
  };

  return (
    <div className="onboarding-form">
       <Col className="form-container">
       <div>
       <img src={ReactLogo} alt="React Logo" />
       </div>
       <div>
       <h2>Hi there, ....</h2>
          <p>Get Started with Appointments.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full name</Form.Label>
              <Form.Control className='input' type="text" placeholder="Adrian Hajdin" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className='input' type="email" placeholder="adrianjamesatry.prl" />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control className='input' type="text" placeholder="+00 0342 0453 34" />
            </Form.Group>
            <Button variant="success"  type="submit" className="mt-3">
              Get Started
            </Button>
          </Form>
    
       </div>
       <div>
        <h6>@carepulse copyright</h6>
       </div>
             </Col>
        <Col >
          <img
            src={Illustration}
            alt="Doctor"
            className="img-fluid"
          />
        </Col>
    </div>
  );
};

export default OnboardingForm;
