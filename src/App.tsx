import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import Game from './pages/Game';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Home />
        <About />
        <Tours />
        <Contact />
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
