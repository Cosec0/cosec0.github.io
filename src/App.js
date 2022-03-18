import './App.css';

import Navbar from './components/navbar/navbar.component';
import WelcomeSection from './components/welcome-section/welcome-section.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
      <Navbar/>
      <WelcomeSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
