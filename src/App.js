import NavBar from './components/NavBar';
import Home from './components/Home';
import RiskCalc from './components/RiskCalc';
import About from './components/About';
import LearnMore from './components/LearnMore';

function App() {
  let component;
  switch(window.location.pathname) {
    // case "/home":
    //   component = <Home /> 
    //   break
    case "/riskcalculator":
    case "/":
      component = <RiskCalc/> 
      break
    case "/about":
      component = <About /> 
      break
    case "/learnmore":
      component = <LearnMore />  
      break
  }

  return (
    <div className='app'>
      <NavBar/>
      <div className="container">
        {component}
      </div>
    </div>
  );
}

export default App;
