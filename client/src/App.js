import Framework from './pages/framework/nav';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login'
import About from './pages/about/about';

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Framework />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;
