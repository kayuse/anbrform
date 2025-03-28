// src/SuccessPage.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { registration_id } = location.state || {};
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-700 mb-6">Your confirmation was successful. Your Registration Details are as follows</p>
        <p>Please note your email might delay but it's going to arrive. </p>
        <p> Registration ID : {registration_id}</p>
        <br />
        <strong> Please if you have any challenges, go to the registration desk</strong>
        <br />
        <br />
        <button
          onClick={handleGoBack}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
