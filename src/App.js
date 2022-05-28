import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Signup from './pages/signup/Signup';
import Account from './pages/account/Account';
import Transaction from './pages/transaction/Transaction';

function App() {
  return (
    <BrowserRouter className='mainApp'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/account' element={<Account />}/>
          <Route path='/transaction' element={<Transaction />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;