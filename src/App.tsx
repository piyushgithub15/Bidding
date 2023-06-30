import GoogleLogin from './Components/GoogleLogin';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';

function App() {

  return (
  <BrowserRouter>
  <Routes>

 <Route path='/' element ={<GoogleLogin />} />
 <Route path='/main' element ={<MainPage/>}/>
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
