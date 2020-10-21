import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Notfound from './component/pages/Notfound';


function App() {
  return (
    <Router>

      <div className="App">

        <Navbar />

         <switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/about" component={About} />
            <Route exact path ="/contact" component={Contact} />
          
         </switch>

       
      </div>

    </Router>
  );
}

export default App;
