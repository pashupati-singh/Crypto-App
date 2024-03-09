
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CryptoHome } from './Page/CryptoHome';
import { CryptoDetails } from './Page/CryptoDetails';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
