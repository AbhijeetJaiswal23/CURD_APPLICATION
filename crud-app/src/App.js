 
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllEntries from './Component/AllEntries';
import AddEntry from './Component/AddEntry';
import Register from './Component/Register';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Register /> } />
        <Route path="all" element={<AllEntries /> } />
        <Route path="/add" element={<AddEntry />} />
        <Route path="/edit/:id" element={<EditUser />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
