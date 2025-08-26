import './index.css'
import Header from './components/header';
import Footer from './components/footer';
import CharactersContainer from './components/characters-container';

function App() {
  return (
    <div className="bg-gray-400 min-h-screen ">
      <Header/>  
      <CharactersContainer/>
      <Footer/> 
    </div>
  );
}

export default App;
