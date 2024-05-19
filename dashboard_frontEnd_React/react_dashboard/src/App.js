
import AddProduct from './AddProduct';
import Login from './Login';
import Register from './Register';
import Update from './Update';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
   
    <Routes>
    <Route path='/add' element={<AddProduct />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/update' element={<Update />} />
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
