import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './pages/Signup';
import Header from './components/Header';
import ShopContextProvider from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ShopContextProvider>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </ShopContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
