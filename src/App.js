import "./App.css";
import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
import Notfound from "./pages/Notfound";
import {BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reactPortafolio" element={<Homepage />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path='*' element={<Notfound />} />
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
