import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar2, Tech, Tech2, Works, StarsCanvas, StarsCanvas_bg } from "./components";
import './Cursor.css';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
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
    </BrowserRouter>
  )
}
export default App