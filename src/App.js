import Framework from './pages/framework/nav';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Framework />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
