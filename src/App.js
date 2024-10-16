import './App.css';
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import React from "react";
import NavBar from "./NavBar";



const App = () => {
  return (
    <div className="App">
<Router>
     <NavBar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/Shop" element={<Shop />} />
       </Routes>
     </main>
   </Router>

    </div>
  );
}

export default App;