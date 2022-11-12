
// import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter> 
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/upload' element={<Upload/>} />
      </Routes>
       <Footer/>
      <ToastContainer />
      </BrowserRouter>
    </>

  );
}

export default App;
