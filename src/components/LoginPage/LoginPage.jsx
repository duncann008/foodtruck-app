import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <img src="https://i.imgur.com/aELXlJL.png"/>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_sizeSm"
          onClick={() => {
            history.push('/home');
          }}
        >
          Register
        </button>
        
      </center>
      <br /><br />
    </div>
  );
}

export default LoginPage;
