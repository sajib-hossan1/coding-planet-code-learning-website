import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
