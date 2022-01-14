import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import Calendar from '../FullCalendar/FullCalendar';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  
  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="newForm">
      <h2>{heading}</h2>
      <img src="https://i.imgur.com/aELXlJL.png"/>
      <div className="grid">
        <div className="grid-col grid-col_8">
          {/* <Calendar /> */}
          
        </div>
        <div>
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
