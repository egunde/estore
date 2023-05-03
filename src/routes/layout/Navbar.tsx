import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box, Typography } from '@mui/material';
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

const myStyles = {
  navbar: {
	backgroundColor: '#fff',
	//background:
	//  'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
	height: '100px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '1.2rem',
	position: 'sticky' as const,
	marginTop: '10px',
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
	color: '#000',
	justifySelf: 'start',
	cursor: 'pointer',
	textDecoration: 'none',
	fontSize: '2rem',
	display: 'flex',
	alignItems: 'center',
	height: '100%',
  },
  cartIcon: {
	color: '#000',
	justifySelf: 'start',
	display: 'flex',
	cursor: 'pointer',
	textDecoration: 'none',
	position: 'absolute' as const,
	top: '0',
	right: '0',
	marginTop: '1.5rem',
	marginRight: '3rem',
  },
  navItem: {
	color: '#000',
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	padding: '0.5rem 1rem',
	height: '100%',
  },
  navLinks: {
	textDecoration: 'none',
	position: 'relative',
	fontWeight: 'bold'
  },
};

export default function Navbar() {


  const mappedItems = navbarItems.map(({ to, text }, index) => {
	return (
		<Link 
			key={index} 
			to={to} 
			style={myStyles.navItem}
		>
			<Typography
				variant='h5'
				sx={myStyles.navLinks}
			>
				{text}
			</Typography>
		</Link>
		);
	});

	return (
		<Box sx={myStyles.navbar}>
			<Link
				to='/'
				className='navbarLogo'
				style={myStyles.navbarLogo}
			>
				<Box
					component='img'
					height="100%"
					src='images/logo.png'
				/>
			</Link>

			<Box sx={myStyles.navItem} display='flex' gap={2}>
				{mappedItems}
			</Box>

			<Link
				to='/cart'
				className='cartIcon'
				style={myStyles.cartIcon}
			>
				<ShoppingBagIcon sx={{fontSize: '40px'}}/>
			</Link>

		</Box>
	);
}