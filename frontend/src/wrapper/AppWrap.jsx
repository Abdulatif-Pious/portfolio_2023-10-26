
import { Social, NavigationDots } from '../components';


const AppWrap = (Component, idName, classNames) => function () {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      
      <Social />
      
      <div className='app__wrapper app__flex-center'>
        <Component className='app__section' />
        
        <div className='copyright'>
          <p className='p__text'>@2023 Abdulatif</p>
          <p className='p__text'>All Rights reserved</p>
        </div>
      </div>

      <NavigationDots activeLink={idName} />
    </div>
  );
};

export default AppWrap;
