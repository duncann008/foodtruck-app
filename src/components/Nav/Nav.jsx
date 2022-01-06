import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Home</h2>
      </Link>
      
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
            <>
              <Link className="navLink" to="/menu">
                Menu
              </Link>
              <Link className="navLink" to="/about">
                About Us/Contact
              </Link>
              <Link className="navLink" to="/login">
                Login / Register
              </Link>
            </>
        )}
        
        
        

        {/* If a user is logged in, show these links */}
        {user.role === 'user' && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}
            <Link className="navLink" to="/menu">
              Start Order
            </Link>
            <Link className="navLink" to="/about">
              About Us/Contact
            </Link>
            <Link className="navLink" to="/MyAccount">
              My Account
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* If an admin is logged in, show these links */}
        {user.role === 'admin' && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}
            <Link className="navLink" to="/menu">
              Menu
            </Link>
            <Link className="navLink" to="/about">
              About Us/Contact
            </Link>
            {/* <Link className="navLink" to="/MyAccount">
              My Account
            </Link> */}

            <LogOutButton className="navLink" />
          </>
        )}

        
      </div>
    </div>
  );
}

export default Nav;
