// src/SuccessPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const SuccessConfirmationPage = () => {
  const navigate = useNavigate();
  const [a, setA] = useState('sss')
  const [Registrant, setRegistrant] = useState({})
  const handleGoBack = () => {
    navigate('/confirm-registration');
  };
  useEffect(() => {
    const registrant = JSON.parse(localStorage.getItem('registrant'));
    setRegistrant(registrant)
    setA('B')
    console.log(a)
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
        <p className="text-gray-700 mb-6">Your confirmation was successful. Your Registration Details are as follows</p>
        <p>Please note your email might delay but it's going to arrive. </p>
        <p> Registration ID : {Registrant?.registration?.registrationId}</p>
        <p>Bible Study Group : {Registrant?.registration?.bibleStudyGroupName}</p>
        <p>Workshop Group : {Registrant?.registration?.ministryWorkshopGroupName}</p>
        <p>Hostel Details : {Registrant?.room} </p>
        <br/>
        <strong> Please if you have any challenges, go to the registration desk</strong>
        <br />
        <br/>
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

export default SuccessConfirmationPage;
