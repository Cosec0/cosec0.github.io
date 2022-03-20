import './App.css';

import Navbar from './components/navbar/navbar.component';
import WelcomeSection from './components/welcome-section/welcome-section.component';
import Projects from './components/projects-list/projects-list.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';
import AboutMe from './components/about-me/about-me.component';
import Skills from './components/skills-list/skills-list.component';

function App() {
  return (
    <>
      <Navbar/>
      <WelcomeSection/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
