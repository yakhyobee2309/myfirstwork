
import './App.css';
import './styles/index.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './conponents/Header';
import Body from './conponents/Body';
import Footer from './conponents/Footer';

function App() {

  return (
    <div className="App">
       <Header />
       <Body />
       <Footer/>

    </div>
 
  );
}

export default App;
