import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper'
import { client, urlFor } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = `*[_type == "skills"]`;
    const expQuery = `*[_type == "experiences"]`;

    client.fetch(query).then((data) => {
      setSkills(data);
    });

    client.fetch(expQuery).then((data) => {
      setExperiences(data);
    })
  }, []);
  
  return (
    <div className='app__section '>
      <h2 className='head__text'>Skills & 
        <span> Experiences </span>
      </h2>
      <div className='skills__container'>
        <div className='skill__container'>
          {skills.map((skill, i) => (
            <div key={`${skill}-${i}`} >
              <div className='item__img  app__flex-center' style={{ backgroundColor: skill?.bgColor }}>
                <img 
                  src={urlFor(skill?.icon)}
                  alt={skill?.name}
                />
              </div>
              <p className='p__text'>{skill?.name}</p>
            </div>
          ))}
        </div>
        <div className='exp__container'>
          {experiences.length > 0 ? (
            experiences.map((experience, i) => (
              <div key={`${experience}-${i}`} className='exp__item' >
                <h3 className='bold__text'>
                  {experience?.year}
                </h3>
                  {experience?.works?.map((item, i) => (
                    <div key={`${item}-${i}`}>
                      <h4 className='bold__text'>{item?.name}</h4>
                      <p className='p__text'>{item?.company}</p>
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p>Unfortunately, I have not any experience. But I can gain  great experience by hiring me.</p>
          )}
        
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills),
  'skills',
  'app__whitebg',
);