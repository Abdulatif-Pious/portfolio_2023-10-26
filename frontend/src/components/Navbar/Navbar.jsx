import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <a className='app__navbar-logo' href='/'>
        <img 
          src={images.logo}
          alt='logo'
        />
      </a>

      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, i) => (
          <div key={`${item}-${i}`} className='app__navbar-link'>
            <div  />
            <li>
              <a href={`#${item}`}>
                {item}
              </a>
            </li>  
          </div>
        ))}
      </ul>

      <div className='app__navbar-menu' >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className='app_navbar-menu-icon' 
          onClick={() => setToggle(true)}
        >
          <HiMenuAlt4 />
        </motion.div>
      {toggle && (
        <motion.div 
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='app__navbar-menu-item'
        >
          <div className='app__navbar-menu-item-icon'>
            <AiOutlineClose onClick={() => setToggle(false)} />
          </div>
          <ul>
            {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, i) => (
              <div key={`${item}-${i+1}`}>
                <li>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </motion.div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;