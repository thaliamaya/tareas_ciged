import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import ErrorPage from "./page/Error/ErrorPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ErrorPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
