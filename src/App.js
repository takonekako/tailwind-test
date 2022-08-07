import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Clients from './pages/clients'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
