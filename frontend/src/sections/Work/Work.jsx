import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub }  from 'react-icons/ai';

import './Work.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeWork, setActiveWork] = useState('All');
  const [animation, setAnimation] = useState({ y: 0, opacity: 1 }); 

  useEffect(() => {
    const query = `*[_type == "works"]`;
    
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, []);

  const handleChange = (item) => {

    setActiveWork(item);
    setAnimation([{ y: 200, opacity: 0}]);
    
    setTimeout(() => {
      setAnimation([{ y: 0, opacity: 1 }])
    
      if (item === "All") {
        setFilterWork(works);
      }  else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500)
  }

  return (
    <div className='app__section app__flex-center'>
      <h2 className='head__text'>My Creative 
        <span> Portfolio </span> 
        section
      </h2>
      
      <div className='btn__container'>
        {['UI/UX', 'React Js', 'Next Js', 'All'].map((item, i) => (
          <motion.button 
            key={`${item}-${i}`} 
            className={`btn__item ${ activeWork === item ? "active__btn" : '' }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={() => handleChange(item)}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <motion.div
        animate={animation}
        transition={{ duration: 0.5, }}
        className='card__container'
      >
        {filterWork.map((item, i) => (
          <div key={`${item}-${i}`}  className='card__item'>
            <div className='card__img'>
              <img 
                  src={urlFor(item?.imgUrl)}
                  alt={item?.title}
              />
              <motion.div 
                whileHover={{ opacity: [0, 1] }}
                className='card__hover app__flex-center'
              >
                <a href={item?.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className='app__flex-center'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={item?.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className='app__flex-center'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='card__content'>
              <h4 className='p__text'>{item?.title}</h4>
              <p className='p__text'>{item?.description}</p>

              <div className='tag__name'>
                <p className='p__text'>{item?.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work),
  'work',
  'app__primarybg'
);