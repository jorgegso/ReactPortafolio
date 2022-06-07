import "./App.css";
import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";
import Notfound from "./pages/Notfound";
import {BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="." element={<Homepage />}/>
        <Route path="cv" element={<Resume />}/>
        <Route path='*' element={<Notfound />} />
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
