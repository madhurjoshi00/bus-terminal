import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';   //import used for routing and sending data
import './App.css';
import Details from './Details';
import Add from './Add';

function App() {
 
 
   

      return (
        <div>
          
          <Router>
            <Routes>
                <Route path="/"  element={<Details/>}></Route>
                <Route path="/add"  element={<Add/>}></Route>
                </Routes>
        

          </Router>
          
        </div>
      );
      
}

export default App;
