import React from 'react';
import './App.css';
import Mainpage from './components/mainPage/mainpage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Mainpage/>
    </div>
     </Router> 
  );
}
export default App;
