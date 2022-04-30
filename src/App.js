import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Banner from './components/CommenPages/Banner/Banner';
import Footer from './components/CommenPages/Footer/Footer';
import Header from './components/CommenPages/Header/Header';
import Home from './components/HomePages/Home/Home';
import Details from './components/DetailsPage/DetailsPage';
import Login from './components/AthenticationPages/Login/Login';
import Registration from './components/AthenticationPages/Registration/Registration';
import AddProduct from './components/ProductManagePages/AddProduct/AddProduct';
import UpdateProduct from './components/ProductManagePages/UpdateProduct/UpdateProduct';
import Default from './components/DefaultPage/DefaultPage';
import AllProduct from './components/HomePages/AllProduct/AllProduct';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      {/* Routes-Start */}
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home> }></Route>
        <Route path='/details/:detailsId' element={ <Details></Details> }></Route>
        <Route path='/allproduct' element={ <AllProduct></AllProduct> }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/registration' element={ <Registration></Registration> }></Route>
        <Route path='/addproduct' element={ <AddProduct></AddProduct> }></Route>
        <Route path='/updateproduct' element={ <UpdateProduct></UpdateProduct> }></Route>
        <Route path='/blog' element={ <Blog></Blog> }></Route>
        <Route path='*' element={ <Default></Default> }></Route>
      </Routes>
      {/* Routes-End */}
      <Footer></Footer>
    </div>
  );
}

export default App;
