import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import WorkSpace from './components/home/workspace/Workspace';
import Clients from './components/home/clients/clients';
import ClientsData from './components/home/clients/ClientData';
function App() {



  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/workspace' element={<WorkSpace />}/>
            <Route path='/clients' element={<Clients />}/>
            <Route path='/clientdata' element={<ClientsData />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
