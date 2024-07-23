import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Logo from '../assets/LOGO.svg'; 

import '../background.css';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar">
    <div className={`flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ${nav ? 'fixed top-0 left-0 w-full  z-50' : ''}`}>
      <h2 className='w-full text-3xl font-bold text-[#ffffff]'>
        <Link to="/"><img src={Logo} alt="Mind Whisperer Logo" className="h-8" style={{ width: '200px', height: 'auto' }} /> {/* SVG used here */}</Link>
      </h2>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/products">Products</Link></li>

        {/* <li className='p-4'><Link to="/products">Cart </Link></li> */}
        <li className='p-4'>
            {/* <Link to="/login">
              <PermIdentityIcon style={{ marginRight: '8px' }} /> login
            </Link> */}
            <Link to="/login"> login </Link>
          </li>
        <li className='p-4'>
          <Link to="/signup">
            <ManageAccountsIcon style={{marginRight:'8px'}}/>
          </Link>
        </li>
        <li className='p-4'>
          <Link to="/shopping">
            <ShoppingCartOutlinedIcon style ={{ marginRight: '8px '}} /> </Link> </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={`md:hidden ${nav ? 'block fixed top-24 left-0 w-full z-50' : 'hidden'}`}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
         
        </h1>
        <li className='p-4 border-b border-gray-600'><Link to="/">Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/products">About</Link></li>
        {/* <li className='p-4'><Link to="/contact">Contact</Link></li> */}
        
      </ul>
    </div>
    </div>
  );
};

export default Navbar;


