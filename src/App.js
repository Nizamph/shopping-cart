import Header from './components/Header';
import './App.css';
import {Routes,
  Route,BrowserRouter
} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Cart from './components/Cart';
function App() {
  return (
    <div>
       <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/cart' element={<Cart/>} />
     </Routes>
     </div>
  );
}

export default App;
