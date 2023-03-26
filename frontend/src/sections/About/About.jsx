import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { client, urlFor } from '../../client';
import { MotionWrap, AppWrap } from '../../wrapper';


const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;

    client.fetch(query).then((data) => {
      setAbout(data);
    })
  }, []);

  return (
    <div className='app__section'>
      <h2 className='head__text'>
        I know that 
        <span> Good Design </span><br />
        means
        <span> Good Business </span>
      </h2>
      
      <div
        className='about__card-container app__flex-center'
      > 
        {about?.map((item, i) => (
          <motion.div
            key={`${item?.title}-${i}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img 
              src={urlFor(item?.imgUrl)}
              alt={item?.title}
            />
            <h4 className='bold__text'>{item?.title}</h4>
            <p className='p__text'>{item?.description}</p>        
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default AppWrap(
  MotionWrap(About),
  'about',
  "app__whitebg",
);