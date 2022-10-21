import logo from './logo.svg';
import './App.css';


import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import ItemsList from './Components/ItemsList/ItemsList';
import HomePage from './Pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import { useSelector } from 'react-redux';
/* LYWmT8EoOV2YykoJz30jTPnMZw9P0BSMFPxJq9CfcUo7GOV5bLU9XTsbVFA */

function App() {
  const data = useSelector(state=>state.basket.items)
  return (

     <div className="App" onClick={()=>console.log(data)}>
        <Header/> 
     

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sales' element={<ItemsList/>}/>
        

       
      </Routes>


      
      <Footer/>
    </div>
   
  );
}

export default App;
