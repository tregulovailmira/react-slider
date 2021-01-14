import './App.css';
import Slider from './components/Slider';
import slides from './components/Slider/slides.json';

function App() {
  return <Slider slides={slides} />;
}

export default App;
