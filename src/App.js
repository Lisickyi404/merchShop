import logo from './logo.svg';
import './App.css';


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import ItemsList from './Components/ItemsList/ItemsList';
import HomePage from './Pages/HomePage/HomePage';
import MakingPage from './Pages/MakingPage/MakingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { useSelector } from 'react-redux';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
/* LYWmT8EoOV2YykoJz30jTPnMZw9P0BSMFPxJq9CfcUo7GOV5bLU9XTsbVFA */

function App() {
  const data = useSelector(state=>state.basket.items)
  return (

     <div className="App" >
        <Header/> 
     

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sales' element={<ItemsList/>}/>
        <Route path='/making' element={<MakingPage/>}/>
        <Route path='/making/:id' element={<CategoryPage/>}/>
       
      </Routes>


      
      <Footer/>
    </div>
   
  );
}

export default App;
