import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import OnboardingForm from './Components/OnboardingForm';
import OtpModal from './Components/OtpModal';
import PatientFormPage from './Components/PatientFormPage';
import AppointmentFormPage from './Components/AppointmentFormPage';
import AdminVerificationPage from './Components/AdminVerificationPage';
import Dashboard from './Components/DashBoard';
import AppointmentSchedule from './Components/AppointmentSchedule';
import SuccessPage from './Components/SuccesPage';
import CancelAppointmentModal from './Components/CancelAppointmentModal';
import './App.css';

const App = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [isPatientFormSubmitted, setIsPatientFormSubmitted] = useState(false);
  const [isAppointmentFormSubmitted, setIsAppointmentFormSubmitted] = useState(false);
  const [isAdminVerified, setIsAdminVerified] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  const [cancelSuccess, setCancelSuccess] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [successDetails, setSuccessDetails] = useState({});

  const handleVerify = () => {
    setIsVerified(true);
  };

  const handleShowOtpModal = () => {
    setShowOtpModal(true);
  };

  const handleCloseOtpModal = () => {
    setShowOtpModal(false);
  };

  const handlePatientFormSubmit = () => {
    setIsPatientFormSubmitted(true);
  };

  const handleAppointmentFormSubmit = () => {
    setIsAppointmentFormSubmitted(true);
    setShowScheduleModal(true);
  };

  const handleAdminVerificationSubmit = () => {
    setIsAdminVerified(true);
  };

  const handleDashboardAttemptClose = () => {
    
  };

  const handleScheduleAppointment = (appointment) => {
    setAppointments(prevAppointments => [...prevAppointments, appointment]);
    setAppointmentSuccess(true);
    setSuccessDetails(appointment);
    setShowScheduleModal(false);
    setShowSuccessPage(true);
  };

  const handleCancelAppointment = (reason) => {
    const cancelledAppointment = { ...successDetails, reason, status: 'Cancelled' };
    setCancelSuccess(true);
    setSuccessDetails(cancelledAppointment);
    setShowCancelModal(false);
    setShowSuccessPage(true);
  };

  const handleCloseSuccessPage = () => {
    setShowSuccessPage(false);
    setIsAdminVerified(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin-verification" element={
          <AdminVerificationPage onSubmit={handleAdminVerificationSubmit} onAttemptClose={handleDashboardAttemptClose} />
        } />
        
        <Route path="/" element={
          <div className="app">
            {!isVerified && (
              <>
                <OnboardingForm onShowModal={handleShowOtpModal} />
                <OtpModal show={showOtpModal} handleClose={handleCloseOtpModal} handleVerify={handleVerify} />
              </>
            )}
            {isVerified && !isPatientFormSubmitted && <PatientFormPage onSubmit={handlePatientFormSubmit} />}
            {isVerified && isPatientFormSubmitted && !isAppointmentFormSubmitted && (
              <AppointmentFormPage onSubmit={handleAppointmentFormSubmit} />
            )}
            {isAppointmentFormSubmitted && !isAdminVerified && (
              <AdminVerificationPage onSubmit={handleAdminVerificationSubmit} onAttemptClose={handleDashboardAttemptClose} />
            )}
            
            {isAdminVerified && !showSuccessPage && (
              <Dashboard
                appointments={appointments}
                onAttemptClose={handleDashboardAttemptClose}
                onSchedule={handleScheduleAppointment}
              />
            )}
            {showSuccessPage && (
              <SuccessPage
                appointmentDetails={successDetails}
                onClose={handleCloseSuccessPage}
              />
            )}
            <AppointmentSchedule
              show={showScheduleModal}
              handleClose={() => {
                setShowScheduleModal(false);
                setShowCancelModal(true);
              }}
              onSchedule={handleScheduleAppointment}
            />
            <CancelAppointmentModal
              show={showCancelModal}
              handleClose={() => setShowCancelModal(false)}
              onCancel={handleCancelAppointment}
            />
          </div>
        } />
        <Route path="/dashboard" element={
          <Dashboard
            appointments={appointments}
            onAttemptClose={handleDashboardAttemptClose}
            onSchedule={handleScheduleAppointment}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;
