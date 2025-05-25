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
    paid_accomodation: '',
    bible_workshop: '',
    ministry_workshop: '',
    nursing_mum: '',
    expectations: '',
    invited_by: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == 'nursing_mum' && value == 'Yes') {
      alert('Dear ' + formData.firstname + ' We recommend you to book a Paid Accomodation')
    }
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
      formData.marital_status == '' ||
      formData.country == '' ||
      formData.has_attended == '' ||
      formData.your_description == '' ||
      formData.needs_attention == '' ||
      formData.nursing_mum == '' ||
      formData.expectations == '' ||
      formData.bible_workshop == '' ||
      formData.ministry_workshop == '' ||
      formData.paid_accomodation == '' ||
      formData.invited_by == ''
    ) {
      alert('Please complete all compulsory fields and Try again, Thank you')
      return
    }
    setRegistrationText("Processing..., Please wait")
    // Process form data here
    try {
      const response = await axios.post('https://hymnadmin-0b62502f66b0.herokuapp.com/api/anbr/register', formData);
      setRegistrationText("Register Now")
      const data = response.data
      if (response.status == 200) {
        navigate('/success', { state: data })
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
              Complete this form to Register for ANBR 2025
            </p>
          </div>
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
          <br />
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
          <br />
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
          <br />
          <hr />
          <br />
          <div >
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
          <br />
          <hr />
          <br />
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
          <br />
          <hr />
          <br />
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
                  Self Employed/Career Professional
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
          <hr />
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
          <hr />
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
          <br />
          <hr />
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Have you attended a previous edition of ANBR *
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
          <hr />
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
          <hr />
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
                  Inducted Member
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
          <hr />
          <br />
          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              Is there a need for a special of comfort for you at the retreat (e.g allergies, health issues,  Pregnant/nursing mothers, disability? *
            </label>
            <div class="formbold-radio-group">
              <label class="formbold-radio-label">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="needs_attention"
                  value='Yes'
                  checked={formData.needs_attention == 'Yes'}
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
                  name="needs_attention"
                  value='No'
                  checked={formData.needs_attention == 'No'}
                  onChange={handleChange}
                  id="qusOne"
                />
                No
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div class="formbold-mb-3">
            <label for="address" class="formbold-form-label">
              Are you a toddler mom? If yes,  how many toddler are you coming with?
            </label>
            <div class="formbold-radio-group">
              <label class="formbold-radio-label">
                <input
                  class="formbold-input-radio"
                  type="radio"
                  name="nursing_mum"
                  value='Yes'
                  checked={formData.nursing_mum == 'Yes'}
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
                  name="nursing_mum"
                  value='No'
                  checked={formData.nursing_mum == 'No'}
                  onChange={handleChange}
                  id="qusOne"
                />
                No
                <span class="formbold-radio-checkmark"></span>
              </label>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Do you Want Paid Accomodation
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="paid_accomodation"
                    value='Yes'
                    checked={formData.paid_accomodation == 'Yes'}
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
                    name="paid_accomodation"
                    value='No'
                    checked={formData.paid_accomodation == 'No'}
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
          <hr />
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Please select the Bible Workshops you would like to attend *
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bible_workshop"
                    value='Ministry Class'
                    checked={formData.bible_workshop == 'Ministry Class'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                 <strong> Ministry Class:</strong>&nbsp;<small>You are currently a pastor, fellowship president or vice president,
                  ministry founders, top leaders in ministries,
                  visioneers and those perceive God's call into full time ministry.</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bible_workshop"
                    value='Believers On A Mission Class'
                    checked={formData.bible_workshop == 'Believers On A Mission Class'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong> Believers On A Mission Class:</strong>&nbsp;<small> 
                  Perceiving God's call into the ministry or wants to clarify God's call for their lives or you just
                   want to grow in your walk with God</small>

                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bible_workshop"
                    value='New Believers Maturity Class'
                    checked={formData.bible_workshop == 'New Believers Maturity Class'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>New Believers Maturity Class:</strong>&nbsp;<small>You just got born again in the last one to 
                    two years and you haven't consciously undergone any serious discipleship class to 
                    ground you in the new life you received and you need</small>

                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bible_workshop"
                    value='Holy Ghost Baptism Class'
                    checked={formData.bible_workshop == 'Holy Ghost Baptism Class'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Holy Ghost Baptism Class:</strong>&nbsp;<small>
                    You are a believer but you are yet to be filled with the Holy 
                    Spirit with evidence of speaking in tongues.</small>

                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="bible_workshop"
                    value='Prayer, Healing and Deliverance Class'
                    checked={formData.bible_workshop == 'Prayer, Healing and Deliverance Class'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Prayer, Healing and Deliverance Class:</strong>&nbsp;<small>
                     You need a special prayer over a matter, or you need prayer for healing
                      or there is a manifestation in your life that looks like demonic activities.</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <br/>
          <hr />
          <br />
          <div class="formbold-mb-5">
            <label for="qusOne" class="formbold-form-label">
              Please select the Ministry Workshops you would like to attend *
            </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministry_workshop"
                    value='Children and Teens Ministry'
                    checked={formData.ministry_workshop == 'Children and Teens Ministry'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Children and Teens Ministry:</strong>&nbsp;<small>You are called or passionate about reaching young people (children and teens)</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministry_workshop"
                    value='Relationship and Family Life Ministry'
                    checked={formData.ministry_workshop == 'Relationship and Family Life Ministry'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Relationship and Family Life Ministry</strong>&nbsp;<small>You are called or passionate about helping people get their marital life right and building solid marriages</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministry_workshop"
                    value='Evangelism and Missions Ministry'
                    checked={formData.ministry_workshop == 'Evangelism and Missions Ministry'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Evangelism and Missions Ministry:</strong>&nbsp;<small>You are called or passionate about reaching the lost for Christ. You are passionate about evangelism and missions</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministry_workshop"
                    value='Spiritual Formation and Maturity Ministry'
                    checked={formData.ministry_workshop == 'Spiritual Formation and Maturity Ministry'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Spiritual Formation and Maturity Ministry:</strong>&nbsp;<small>You are called or passionate about helping people to grow in their walk with Christ.</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input
                    class="formbold-input-radio"
                    type="radio"
                    name="ministry_workshop"
                    value='Believers in the Workplace Ministry'
                    checked={formData.ministry_workshop == 'Believers in the Workplace Ministry'}
                    onChange={handleChange}
                    id="qusOne"
                  />
                  <strong>Believers in the Workplace Ministry:</strong>&nbsp;<small>You are called or passionate about reaching people in the workplace. You see yourself more like someone sent into the workplace.</small>
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <button class="formbold-btn" type='submit'>{RegistrationText}</button>
        </form>
      </div>
    </div>

  );
}

export default Register;
