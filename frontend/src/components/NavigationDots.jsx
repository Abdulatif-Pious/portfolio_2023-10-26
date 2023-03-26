
const NavigationDots = ({ activeLink }) => (
    <div className='app__navigation-dots app__flex-center'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, i) => (
        <a
          key={`${item}-${i}-${i}`}
          href={`#${item}`}
          style={ activeLink === item ? { backgroundColor: '#313bac'} : null }
          className='dot'
        />
        
      ))}
    </div>
);


export default NavigationDots;