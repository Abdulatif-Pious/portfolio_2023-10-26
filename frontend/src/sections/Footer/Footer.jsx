import { useState } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [form, setForm] = useState({
    name: '', 
    email: '',
    message: '',
  });
  const [isLoading, setIsloading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name] : value});
  };

  const contact = {
    _type: 'contact',
    name: form.name,
    email: form.email,
    message: form.message
  }
  const handleSubmit = () => {
    setIsloading(true);

    client
      .create(contact)
      .then(() => {
        setIsloading(false);
        setIsSubmitted(true);
      })
      .catch((err) => console.log(err));
    };

  return (
    <div className='app__section'>
      <h2 className='head__text'>Take coffee & 
        <span> Chat </span>
        with me
      </h2>

      <div className='contact__card-container'>
        <div className='contact__card-item'>
          <img 
            src={images.email}
            alt='email_img'
          />
          <a href='mailto:info@Abdulatif.com' className='p__text'>
            info@Abdulatif.com
          </a>
        </div>
        <div className='contact__card-item'>
          <img 
            src={images.mobile}
            alt='mobile_img'
          />
          <a href='tel:+998 (90) 022-76-72' className='p__text'>
            tel:+998 (90) 022-76-72
          </a>
        </div>
      </div>
      
      {isSubmitted ? (
        <h2 className='head__text'>Thank you for
          <span> getting in touch! </span>
        </h2>) : (
          <div className='input__container '>
            <div>
              <input 
                type='text'
                placeholder='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='p__text'
                required
              />
            </div>
            <div>
              <input 
                type='email'
                placeholder='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='p__text'
                required
              />
            </div>
            <div>
              <textarea 
                rows='10'
                cols='2'
                value={form.message}
                name='message'
                placeholder='message...'
                onChange={handleChange}
                className='p__text'
                required
              />
            </div>
            <div className="app__flex-center">
              <motion.button 
                type='submit'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                onClick={handleSubmit}
              >
                {isLoading ? 'Sending...' : 'Send message'}
              </motion.button>
            </div>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer),
  'contact',
  'app__whitebg'
);