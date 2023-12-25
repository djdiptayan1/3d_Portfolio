import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar2,
  Tech2,
  Works,
  StarsCanvas,
  StarsCanvas_bg,
} from "./components";
import "./Cursor.css";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Analytics />
        <div className="bg-hero-pattern_transparent bg-cover bg-no-repeat bg-center">
          <Navbar2 />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech2 />
        <Works />
        <div> {isDesktop && <StarsCanvas_bg />}</div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
