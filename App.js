import logo from './logo.svg';
import './App.css';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import Navbars from './Components/pages/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './Components/pages/form';
import CounterApp from './Components/pages/Counter';
// import { UseDispatch,useDispatch,useSelector } from 'react-redux';
// import { incNumber,decNumber,resetNumber } from './action';
import Fetch from './Components/pages/Fetch';
import Fetchdata from './Components/pages/Fetchdata';


function App() {
  // const myStore=useSelector((state)=>state.ChangeNumber)
  // const dispatch=useDispatch();
  return (
    <>
    {/* <BrowserRouter>
   <Navbars/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter> */}
   {/* <Form/> */}
{/* 
   <CounterApp myStore={myStore} dispatch={dispatch} incNumber={incNumber} decNumber={decNumber} resetNumber={resetNumber}/> */}
   {/* <Fetch/> */}
   <Fetchdata/>

    </>
  );
}

export default App;
