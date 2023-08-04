import { motion } from 'framer-motion';

import './Header.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';


const Header = () => {
  return (
    <div className='app__header app__flex-center'>
      
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1]}}
        transition={{ duration: 1 }}
        className='header__info'
      >
        <div className='header__info-badge1'>
          <span>👋</span>
          <div>
            <p className='p__text'>Hello, I Am</p>
            <h3 className='head__text'>Abdulatif</h3>
          </div>
        </div>
        
        <div className='header__info-badge2'>
            <p className='p__text'>Web developer</p>
            <p className='p__text'>Freelancer</p>
        </div>
      </motion.div>
    
      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{  duration: 1.5, ease: 'easeInOut', staggerChildren: 1.5 }} 
        className='header__img'
      >
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{ duration: 1.5 }}
          src={images.circle}
          alt='circle_img'
          className='header__img-1'
        />
        <img 
          src={images.profile}
          alt='profile_img'
          width="500px"
          height="500px"
          className='header__img-2'
        />
      </motion.div>
    
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className='header__circles'
      > 
        <div>
          <img 
            src={images.flutter}
            alt='flutter_img'
          />
        </div>
        <div>
          <img 
            src={images.redux}
            alt='redux_img'
          />
        </div>
        <div>
          <img 
            src={images.sass}
            alt='sass_img'
          />
        </div>
      </motion.div>
    </div>
  )
};

export default AppWrap(Header, 'home');