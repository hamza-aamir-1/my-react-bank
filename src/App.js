import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Account from './pages/account/Account';

function App() {
  return (
    <div className='mainApp'>
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;