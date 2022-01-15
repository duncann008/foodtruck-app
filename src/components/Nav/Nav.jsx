import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { BottomNavigation, Badge } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home'
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Cart from '../Cart/Cart';


const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 80
  }
}));

function Nav() {
  const cartReducer = useSelector(store => store.cartReducer);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const [value, setValue] = useState(0)
  const classes = useStyles();
  const StyledBottomNav = styled(BottomNavigation)`
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: #FFFFFF;
`;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const sumQuantity = () => {
    let sumTotal = 0;
    for (let item of cartReducer) {
      sumTotal += item.quantity;
    }
    return sumTotal;
  }

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title">Home</h2>
      </Link> */}
      
      <div className='nav'>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
            <>
              <StyledBottomNav              
              showLabels
              // value={value}
              // onChange={(event, newValue) =>  {
              //   setValue(newValue);
              // }}
              
              >
              <BottomNavigationAction 
                label='Home' 
                icon={<HomeIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/home' />
              <BottomNavigationAction 
                label='Menu' 
                icon={<RestaurantMenuIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/menu' />
              <BottomNavigationAction 
                label='About Us' 
                icon={<InfoIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/about' />
            </StyledBottomNav>
              {/* <Link className="navLink" to="/login">
                Login / Register
              </Link> */}
            </>
        )}
        
        
        

        {/* If a user is logged in, show these links */}
        {user.role === 'user' && (
          <div>
            <StyledBottomNav 
              showLabels
              // value={value}
              // onChange={(event, newValue) =>  {
              //   setValue(newValue);
              // }}
              
              >
              <BottomNavigationAction 
                label='Home' 
                icon={<HomeIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/user' />
                <BottomNavigationAction 
                label='About Us' 
                icon={<InfoIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/about' />
              <BottomNavigationAction 
                label='Menu' 
                icon={<RestaurantMenuIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/menu' />
              <BottomNavigationAction 
                label='Cart' 
                component={ Link }
                to='/cart'
                icon={
                <Badge 
                  sx={{ color: "white"}}
                  className="cartBadge"
                  badgeContent={sumQuantity()}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  >
                  <ShoppingCartIcon className="cartIcon" sx={{color: 'black'}} />
                </Badge>
              }
                >  
              </BottomNavigationAction>
              <BottomNavigationAction 
                label='Account' 
                icon={<AccountCircleIcon sx={{color: 'black'}} />}
                component={ Link }
                to='/MyAccount' />
            </StyledBottomNav>
            {/* <Link className="navLink" to="/menu">
              Start Order
            </Link>
            <Link className="navLink" to="/MyAccount">
              My Account
            </Link>
            <Link className="navLink" to="/about">
              About Us/Contact
            </Link>

            <LogOutButton className="navLink" /> */}
          </div>
        )}

        {/* If an admin is logged in, show these links */}
        {user.role === 'admin' && (
          <StyledBottomNav
            showLabels
            
          >
          <BottomNavigationAction 
            label='Home' 
            icon={<HomeIcon sx={{color: 'black'}} />}
            component={ Link }
            to='/user' />
          <BottomNavigationAction 
            label='Edit Menu' 
            icon={<RestaurantMenuIcon sx={{color: 'black'}} />}
            component={ Link }
            to='/menu' />
          <BottomNavigationAction 
            label='About Us' 
            icon={<ContactPhoneIcon sx={{color: 'black'}} />}
            component={ Link }
            to='/about' />
        </StyledBottomNav>
        )}

        
      </div>
    </div>
  );
}

export default Nav;
