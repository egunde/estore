import { Box, Dialog, Hidden, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navbarItems = [
  {
    text: 'Products',
    to: '/catalog',
  },
  {
    text: 'Log In',
    to: '/login',
  },
  {
    text: 'Register',
    to: '/register',
  },
  {
    text: 'Account',
    to: '/account',
  },
];

//eslint-disable-next-line react/display-name
const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction='down' ref={ref} {...props} />;
  }
);

const myStyles = {
  navbar: {
    background:
      'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    position: 'sticky' as const,
    top: '0',
    zIndex: '999',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    maxWidth: '1500px',
  },
  navbarLogo: {
    color: '#fff',
    justifySelf: 'start',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  fa_cart_shopping: {
    color: '#fff',
    justifySelf: 'start',
    display: 'flex',
    cursor: 'pointer',
    textDecoration: 'none',
    position: 'absolute' as const,
    top: '0',
    right: '0',
    marginTop: '1.5rem',
    marginRight: '2.5rem',
    fontSize: '2.2rem',
  },
  navItem: {
    height: '80px',
    textDecoration: 'none',
  },
  navLinks: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    height: '100%',
  },
  fa_bars: {
    color: '#fff',
  },
  '@media screen and (max-width: 960px)': {
    __expression__: 'screen and (max-width: 960px)',
    NavbarItems: {
      position: 'relative',
    },
    navMenu: {
      display: 'flex',
      flexDirection: 'column' as const,
      width: '10%',
      position: 'absolute' as const,
      top: '15px',
      marginLeft: '2rem',
      color: '#ffff',
      fontSize: '3rem',
      left: '0',
      opacity: '1',
      transition: 'all 0.5s ease',
    },
    navMenuActive: {
      background: '#242222',
      left: '0',
      opacity: '1',
      transition: 'all 0.5s ease',
      zIndex: '1',
    },
    fa_times: {
      color: '#fff',
      fontSize: '2.5rem',
      alignItems: 'right',
    },
    navItemMobile: {
      height: '80px',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      textDecoration: 'none',
    },
    navLinksMobileNew: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      textDecoration: 'none',
      height: '100%',
      width: '100%',
    },
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(!open);
  const onCloseHandler = () => setOpen(false);

  const mappedItems = navbarItems.map(({ to, text }, index) => {
    return (
      <Link key={index} to={to} className='navbarItem' style={myStyles.navItem} onClick={onCloseHandler}>
        <Typography
          className='navLinks'
          style={myStyles.navLinks}
        >
          {text}
        </Typography>
      </Link>
    );
  });
  const mappedItemsMobile = navbarItems.map(({ to, text }, index) => {
    return (
      <Link
        key={index}
        to={to}
        className='navItemMobile'
        style={myStyles['@media screen and (max-width: 960px)'].navItemMobile}
        onClick={onCloseHandler}
      >
        <Typography
          className='navLinks'
          style={myStyles.navLinks}
        >
          {text}
        </Typography>
      </Link>
    );
  });

  return (
    <Box>
      <nav className='navbar' style={myStyles.navbar}>
        <Link
                to='/'
                className='navbarLogo'
                style={myStyles.navbarLogo}
                onClick={onCloseHandler}
            >
            <Box
                component='img'
                height="100%"
                src='images/logo.png'
            />
        </Link>

        <div className='navbarContainer'>
          <Hidden mdDown>
            <Box sx={myStyles.navItem} display='flex' gap={2}>
              {mappedItems}
            </Box>
          </Hidden>

          <Link
            to='/cart'
            className='cartIcon'
            style={myStyles.fa_cart_shopping}
            onClick={onCloseHandler}
          >
            <i className='fa-solid fa-cart-shopping' />
          </Link>
        </div>

        <Hidden mdUp>
          <div
            className='navMenu'
            style={myStyles['@media screen and (max-width: 960px)'].navMenu}
            onClick={onOpenHandler}
          >
            <i
              className={open ? 'fas fa-times' : 'fas fa-bars'}
              style={
                (myStyles['@media screen and (max-width: 960px)'].fa_times,
                myStyles.fa_bars)
              }
            />
          </div>
          <Dialog
            open={open}
            fullScreen
            fullWidth
            TransitionComponent={Transition}
            PaperProps={{
              sx: {
                boxShadow: 'none',
                backgroundColor: '#242222',
              },
            }}
            style={
              myStyles['@media screen and (max-width: 960px)'].navMenuActive
            }
          >
            <Box py={3} marginTop='auto' gap={2}>
              {mappedItemsMobile}
            </Box>
          </Dialog>
        </Hidden>
      </nav>
    </Box>
  );
}

export default Navbar;