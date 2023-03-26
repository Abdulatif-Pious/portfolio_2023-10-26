import { motion } from 'framer-motion';


const MotionWrap = ( Component ) => function() {
  return (
    <motion.div
      whileInView={{ y: [150, 100, 0], opacity: [0, 0.5, 1] }}
      transition={{ duration: 0.8, ease: 'easeOut'}}
    >
      <Component />
    </motion.div>
  );
}

export default MotionWrap;