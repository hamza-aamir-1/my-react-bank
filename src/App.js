import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <BrowserRouter className='mainApp'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          {/* <Route path='/signup' element={<Signup />}/> */}
        </Route>
        <Route path='/' element={<Layout />}>
          <Route path='/signup' element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;