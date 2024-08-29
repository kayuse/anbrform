import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function ConfirmRegistration() {
  const navigate = useNavigate()
  const { id } = useParams();
  const handleClick = () => {
    alert('Button was clicked!');
  };
  const [RegistrationText, setRegistrationText] = useState('Confirm Registration')
  const [Registrant, setRegistrant] = useState({})
  const [formData, setFormData] = useState({
    regId: '',
    ministryWorkshopId: '',
    bibleStudyId: '',
    hasAccomodation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistrationText("Processing..., Please wait")

    try {
      if(formData.regId == '' || formData.bibleStudyId == '' || formData.ministryWorkshopId == ''){
        alert('Please Type RegistrationID, Select Workshop and Bible Study Group')
        setRegistrationText("Confirm Registration")
        return;
      }
      const requestData = formData
      const response = await axios.post('https://anbr.ilanaa.org/api/registrant/confirm', requestData);
      setRegistrationText("Confirm Registration")
      const globalState = JSON.parse(localStorage.getItem('globalState'));
      const data = response.data
      localStorage.setItem('registrant', JSON.stringify(data));
      if (response.status == 200) {
        navigate('/success-confirmation')
        return;
      } else {
        alert(data.message)
      }
    } catch (error) {
      // setError(error);
      alert('Could not complete your registration, please contact your admin')
      setRegistrationText("Register Now")
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anbr.ilanaa.org/api/registrant/' + id);
        if (response.data == "") {
          alert('Invalid Registration ID')
          return;
        }
        setRegistrant(response.data)
        let data = formData
        data.regId = Registrant.registrationId
        setFormData(data) 
        console.log(formData,Registrant)
      } catch (error) {
        alert('Could not Fetch Your Details Please try Again')
        //  setError(error); // Capture and set the error
      } finally {
        //   setLoading(false); // Stop loading once the request is complete
      }
    };
  //  fetchData();
  }, []);
  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">

        <img src="https://threshinghouse.org/wp-content/uploads/2024/03/DSC_0306.jpg" width={500}></img>

        <form method="POST" onSubmit={handleSubmit}>
          <div class="formbold-form-title">
            <br />
            <h2 class="">Hi, Please Confirm your Registration</h2>
            <p>
              Complete this form to Confirm Your Registration
            </p>
          </div>
          <br />
          <div>
            <label for="thregif" class="formbold-form-label">
              THREG ID *
            </label>
            <input
              type="text"
              name="regId"
              value={formData.regId}
              onChange={handleChange}
              class="formbold-form-input"
            />
          </div> 
          <br/>
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Please Select your Bible Study Workshop
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bibleStudyId"
                    value='BELIEVERS ON A MISSION CLASS'
                    checked={formData.bibleStudyId == 'BELIEVERS ON A MISSION CLASS'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  BELIEVERS ON A MISSION CLASS
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bibleStudyId"
                    value='NEW BELIEVERS MATURITY CLASS'
                    checked={formData.bibleStudyId == 'NEW BELIEVERS MATURITY CLASS'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  NEW BELIEVERS MATURITY CLASS
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bibleStudyId"
                    value='HOLY GHOST BAPTISM CLASS'
                    checked={formData.bibleStudyId == 'HOLY GHOST BAPTISM CLASS'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  HOLY GHOST BAPTISM CLASS
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bibleStudyId"
                    value='PRAYER, HEALING AND DELIVERANCE CLASS'
                    checked={formData.bibleStudyId == 'PRAYER, HEALING AND DELIVERANCE CLASS'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  PRAYER, HEALING AND DELIVERANCE CLASS
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br/>
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Please select your Ministry Workshop
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='Believers in Workplace'
                    checked={formData.ministryWorkshopId == 'Believers in Workplace'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Believers in Workplace
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='Spiritual Maturity'
                    checked={formData.ministryWorkshopId == 'Spiritual Maturity'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Spiritual Maturity
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='Children and Teens'
                    checked={formData.ministryWorkshopId == 'Children and Teens'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Children and Teens
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='Missions ministry'
                    checked={formData.ministryWorkshopId == 'Missions ministry'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Missions ministry
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='Relationship and family life'
                    checked={formData.ministryWorkshopId == 'Relationship and family life'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Relationship and family life
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='YOUNGSTARS  CLASS'
                    checked={formData.ministryWorkshopId == 'YOUNGSTARS  CLASS'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  YOUNGSTARS  CLASS
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministryWorkshopId"
                    value='Ministry class'
                    checked={formData.ministryWorkshopId == 'Ministry class'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Ministry class
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Do you want an Accomodation
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="hasAccomodation"
                    value='false'
                    checked={formData.hasAccomodation == 'false'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Yes
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="hasAccomodation"
                    value='true'
                    checked={formData.hasAccomodation == 'true'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  No
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br />
          <button class="formbold-btn" type='submit'>{RegistrationText}</button>
        </form>
      </div>
    </div>

  );
}

export default ConfirmRegistration;
