import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Metrics} from "./pages/Metrics";
import {About} from "./pages/About";
import {Navigation} from "./components/Navigation";

function App() {
  return(
      <>
          <Navigation/>
          <Routes>
              <Route path="/" element={ <Metrics/> } />
              <Route path="/about" element={ <About/> } />
          </Routes>
      </>
  )
}

export default App;
