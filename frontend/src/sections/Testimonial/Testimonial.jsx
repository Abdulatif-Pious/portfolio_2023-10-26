import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import './Testimonial.scss';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = `*[_type == "testimonials"]`;
    const brandQuery = `*[_type == "brands"]`;

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandQuery).then((data) => {
      setBrands(data);
    })
  }, []);

  return (
    <div className='app__section'>
      {testimonials?.length && (
        <div className='testimonial__card'>
          <img 
            src={urlFor(testimonials[activeIndex]?.imgUrl)}
            alt={testimonials[activeIndex]?.name}
          />
          <div className='testimonial__card-content'>
            <p className='bold__text'>{testimonials[activeIndex]?.feedback}</p>
            
            <div>
              <p className='bold__text'>{testimonials[activeIndex]?.name}</p>
              <p className='p__text'>{testimonials[activeIndex]?.company}</p>
            </div>
          </div>
        </div>
      )}

      <div className='slide__container'>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className='slide__button app__flex-center'
          onClick={() => setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
        >
          <FaChevronLeft />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className='slide__button app__flex-center'
          onClick={() => setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
        >
          <FaChevronRight />
        </motion.div>
      </div>

      <div className='brand__container'>
        {brands?.map((brand, i) => (
          <img
            key={`${brand?.name}-${i}`}
            src={urlFor(brand?.imgUrl)}
            alt={brands?.name}
        />
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Testimonial),
  'testimonial',
  'app__primarybg',
);