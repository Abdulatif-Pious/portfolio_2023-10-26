
import { Navbar } from './components';
import { About, Footer, Header, Skills, Work, Testimonial } from './sections';
import './App.scss';

const App = () => (
  <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;