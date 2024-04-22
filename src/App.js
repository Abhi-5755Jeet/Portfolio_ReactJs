import NavBar from "./component/navBar";
import Home from "./component/Home";
import SocialLinks from "./component/SocialLinks";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
     <NavBar/>
    <Home/>
    <SocialLinks/>
    <About></About>
    <Portfolio/>
    <Skills/>
    <Contact/>
    </div>
  );
}

export default App;
