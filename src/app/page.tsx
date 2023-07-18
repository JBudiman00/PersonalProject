import Nav from './components/nav';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
import Aboutme from './components/aboutme';

export default function Main() {
    return (
        <div className="relative">
            <Nav />
            <Home />
            <Projects />
            <Aboutme />
            <Contact />
        </div>
    )
  }