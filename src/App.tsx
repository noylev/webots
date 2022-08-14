import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from "./components/home/Home";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/start" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
