import './App.css';
import Banner from './components/CommenPages/Banner/Banner';
import Footer from './components/CommenPages/Footer/Footer';
import Header from './components/CommenPages/Header/Header';
import Home from './components/HomePages/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
