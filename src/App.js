
import './App.css';
import Header from './Header';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
     <Routes>
     <Route path='/add' element={<AddProduct />} />
     <Route path='/update' element={<UpdateProduct />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     
     </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
