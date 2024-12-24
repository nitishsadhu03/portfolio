import About from "../sections/About"
import Contact from "../sections/Contact"
import Education from "../sections/Education"
import Footer from "../sections/Footer"
import Home from "../sections/Home"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import ScrollToAnchor from "../components/ScrollToAnchor";
import MobileNavbar from "../components/MobileNavbar"
import Experince from "../sections/Experince"

const LandingPage = () => {
  return (
    <>  
        <ScrollToAnchor/>
        <Home/>
        <About/>
        <Experince/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
        <Footer/>
        <MobileNavbar/>
    </>
  )
}

export default LandingPage