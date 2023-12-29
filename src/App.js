import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  const [Mode, setMode] = useState("light");

  function togglestyle() {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="TextUtilts" abouttext="About Us" Mode={Mode} togglestyle={togglestyle} />
    <TextForm heading="Text for Analysis"  Mode={Mode} />
  
    </>
    // <BrowserRouter>
    //   <>
    //     <Navbar title="TextUtilts" abouttext="About Us" Mode={Mode} togglestyle={togglestyle} />
    //     <Routes>
    //       <Route path="/About" element={<About />} />
    //       <Route path="/TextForm" element={<TextForm heading="Text for Analysis" Mode={Mode} />} />
    //     </Routes>
    //   </>
    // </BrowserRouter>
  );
}

export default App;

