import React, { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()
  const handleClick = () => {
    alert('Button was clicked!');
  };
  const [RegistrationText, setRegistrationText] = useState('Register Now')
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    address: '',
    occupation: '',
    marital_status: '',
    country: '',
    has_attended: '',
    your_description: '',
    needs_attention: '',
    nursing_mum: '',
    expectations: '',
    invited_by: ''
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
    if (formData.firstname == '' ||
      formData.lastname == '' ||
      formData.email == '' ||
      formData.mobile == '' ||
      formData.address == '' ||
      formData.occupation == '' ||
   //   formData.marital_status == '' ||
      formData.country == '' ||
      formData.has_attended == '' ||
      formData.your_description == '' ||
      formData.needs_attention == '' ||
   //   formData.nursing_mum == '' ||
      formData.expectations == '' ||
      formData.invited_by == ''
    ) {
      alert('Please complete all compulsory fields and Try again, Thank you')
      return
    }
    setRegistrationText("Processing..., Please wait")
    // Process form data here
    try {
      const response = await axios.post('http://localhost:3333/api/register', formData);
      setRegistrationText("Register Now")
      const data = response.data
      console.log(data)
      if (data.status == 200) {
        navigate('/success')
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

  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">

        <img src="https://threshinghouse.org/wp-content/uploads/2024/03/DSC_0306.jpg" width={500}></img>

        <form method="POST" onSubmit={handleSubmit}>
          <div class="formbold-form-title">
            <h2 class="">Register now</h2>
            <p>
              Complete this form to Register for ANBR 2024
            </p>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="firstname" class="formbold-form-label">
                First name *
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                class="formbold-form-input"
              />
            </div>
            <div>
              <label for="lastname" class="formbold-form-label"> Last name *</label>
              <input
                type="text"
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
                id="lastname"
                class="formbold-form-input"
              />
            </div>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="email" class="formbold-form-label"> Email *</label>
              <input
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                class="formbold-form-input"
              />
            </div>
            <div>
              <label for="phone" class="formbold-form-label"> Phone Number(Whatsapp preferably)   *</label>
              <input
                type="text"
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                id="phone"
                class="formbold-form-input"
              />
            </div>
          </div>

          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              Residential address (with street name, landmark and nearest bus stop) *
            </label>
            <input
              type="text"
              name='address'
              value={formData.address}
              onChange={handleChange}
              id="address"
              class="formbold-form-input"
            />
          </div>
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Occupation *
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    value="Jambite"
                    name='occupation'
                    type="radio"
                    checked={formData.occupation == 'Jambite'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Jambite
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name='occupation'
                    value="Undergraduate"
                    checked={formData.occupation == 'Undergraduate'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Undergraduate
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name='occupation'
                    value="Nysc / Postgraduate"
                    id="qusOne"
                    checked={formData.occupation == 'Nysc / Postgraduate'}
                    onChange={handleChange}
                  />
                  NYSC/Postgraduate
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name='occupation'
                    value="Self Employed/Career Professional"
                    checked={formData.occupation == 'Self Employed/Career Professional'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Self employed/Career Professional
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name='occupation'
                    value="Clergy"
                    checked={formData.occupation == 'Clergy'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Clergy
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name='occupation'
                    checked={formData.occupation == 'Secondary School Student'}
                    value="Secondary School Student"
                    id="qusOne"
                    onChange={handleChange}
                  />
                  Secondary school student
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Marital Status
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    checked={formData.marital_status == 'Single'}
                    value='Single'
                    name="marital_status"
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Single
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    checked={formData.marital_status == 'Married'}
                    value='Married'
                    name="marital_status"
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Married
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>

            </div>
          </div>
          <br />
          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              State and Country of Residence *
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              id="country"
              class="formbold-form-input"
            />
          </div>
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Habe you attended a previous edition of ANBR *
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="has_attended"
                    value='Yes'
                    checked={formData.has_attended == 'Yes'}
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
                    name="has_attended"
                    value='No'
                    checked={formData.has_attended == 'No'}
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
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              How did you hear about this retreat? *
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="invited_by"
                    value='Personal Invite'
                    checked={formData.invited_by == 'Personal Invite'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Personal Invite
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="invited_by"
                    value='Social Media'
                    checked={formData.invited_by == 'Social Media'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Social Media
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="invited_by"
                    value='Email'
                    checked={formData.invited_by == 'Email'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Email
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="invited_by"
                    value='Others'
                    checked={formData.invited_by == 'Others'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Others
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Which of these best describe you? *
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="your_description"
                    value='Non-Threshing House Member'
                    checked={formData.your_description == 'Non-Threshing House Member'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Non-Threshing House Member
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="your_description"
                    value='A Threshing House Volunteer'
                    checked={formData.your_description == 'A Threshing House Volunteer'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  A Threshing House Volunteer
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="your_description"
                    value='Threshing House Inducted Member'
                    checked={formData.your_description == 'Threshing House Inducted Member'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Threshing House Inducted Member
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="your_description"
                    value='Resource Persons'
                    checked={formData.your_description == 'Resource Persons'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  Resource Persons
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br />
          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              Is there a need for a special of comfort for you at the retreat (e.g allergies, health issues,  Pregnant/nursing mothers, disability? *
            </label>
            <input
              type="text"
              name="needs_attention"
              value={formData.needs_attention}
              onChange={handleChange}
              id="needs_attention"
              class="formbold-form-input"
            />
          </div>

          <br />
          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              Are you a toddler mom? If yes,  how many toddler are you coming with?

            </label>
            <input
              type="text"
              name="nursing_mum"
              value={formData.nursing_mum}
              onChange={handleChange}
              id="nursing_mum"
              class="formbold-form-input"
            />
          </div>
          <br />
          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              What are your expectations from this year's Retreat? *

            </label>
            <input
              type="text"
              name="expectations"
              value={formData.expectations}
              onChange={handleChange}
              id="expectations"
              class="formbold-form-input"
            />
          </div>
          <button class="formbold-btn" type='submit'>{RegistrationText}</button>
        </form>
      </div>
    </div>

  );
}

export default Register;
