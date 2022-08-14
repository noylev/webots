import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <header>
      </header>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
