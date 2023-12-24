import React, { useState, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar2, Tech, Tech2, Works, StarsCanvas, StarsCanvas_bg } from "./components";
import Loading_Screen from './components/Loading_Screen';
import './Cursor.css';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this delay as needed
  }, []);

  return (
    <BrowserRouter>
      {/* {loading ? (
        <Loading_Screen />
      ) : ( */}
      <div className="relative z-0 bg-primary">
        <Analytics />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar2 />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech2 />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <StarsCanvas_bg />
      </div>
      {/* )} */}
    </BrowserRouter >
  );
};
export default App