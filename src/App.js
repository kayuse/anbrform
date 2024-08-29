// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuccessPage from './SuccessPage';
import SuccessConfirmationPage from './SuccessConfirmationPage'
import Register from './Register';
import ConfirmRegistration from './ConfirmRegistration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/confirm-registration/:id" element={<ConfirmRegistration />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/success-confirmation/" element={<SuccessConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
