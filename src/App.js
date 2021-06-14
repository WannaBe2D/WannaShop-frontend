import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import PreviewCard from './Components/PreviewCard'
import OurFavorites from './Components/OurFavorites';
import ShopByCategory from './Components/ShopByCategory';
import NewArrivals from './Components/NewArrivals';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <PreviewCard />
      <OurFavorites />
      <ShopByCategory />
      <NewArrivals />
      <Footer />
    </>
  );
}

export default App;
