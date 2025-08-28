import './index.css'
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-top';
import HeroSlideshow from './components/home-slideshow';

function App() {
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col">
      <Header/>
        <main className="flex-1">
          <div className="space-y-8">
            <HeroSlideshow></HeroSlideshow>
          </div>
        </main>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;