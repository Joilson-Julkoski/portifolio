import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import AnimatedCursor from 'react-animated-cursor';
import { MobileProvider } from './providers/screenSize';

function App() {
  return (
    <>
      <AnimatedCursor innerSize={20}
        outerSize={20}
        color='253, 133, 58' />
      <MobileProvider>
        <Home />
      </MobileProvider>
    </>
  );
}

export default App;
