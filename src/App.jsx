import Header from "./components/Header"
import Home from "./components/Home";
import './App.css'
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import NonTechSkills from "./components/Non-Tech-Skills";
import Tools from "./components/Tools";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";




function App(){
  return(
    <>
    <div>
      <Home />
      <About/>
      <TechnicalSkills />
      <NonTechSkills />
      <Tools/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
    </>
  )
}

export default App;
