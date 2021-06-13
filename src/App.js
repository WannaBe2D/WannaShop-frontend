import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import PreviewCard from './Components/PreviewCard'
import OurFavorites from './Components/OurFavorites';

function App() {
  return (
    <>
      <Header />
      <PreviewCard />
      <OurFavorites />
    </>
  );
}

export default App;
