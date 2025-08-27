import './index.css'
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-top';

function App() {
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col">
      <Header/>
        <main className="flex-1">
          <div className="p-8 space-y-8">
            {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
                    <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            ))}
          </div>
        </main>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;