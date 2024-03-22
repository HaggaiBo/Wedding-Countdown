import './App.css';

import DisplayCount from './componens/DisplayCount';
import Lottie from 'react-lottie';
import animation from './Assets/animation.json'
import Carusel from './componens/Carusel';

function App() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="col-12 d-flex flex-column align-items-center justify-content-evenly mt-5" >
      <div className='titel col-12 m-1 text-center'>
      <h1 style={{fontSize:'20vmin'}}>Hilla & Haggai</h1>
      <h1 style={{fontSize:'15vmin'}}>sunday 23.6.24</h1>
      <Lottie 
	    options={defaultOptions}
        height= '50vmin'
        width='50vmin'/>

      </div>

      <DisplayCount/>
      
      <Carusel/>
          </div>
  );
}

export default App;
