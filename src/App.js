import './App.css';
import Home from './components/home/Home.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx'
import About from './components/about/About.jsx';
// import Services from './components/services/Services.jsx';
import Resume from './components/resume/Resume.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Blog from './components/blog/Blog.jsx';
import Contact from './components/contact/Contact.jsx';
import Skills from './components/skills/Skills.jsx';

function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'> 
      <Home/>
      <About/>
      {/* <Services/> */}
      <Resume/>
      <Portfolio/>
      <Skills/>
      <Blog/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
