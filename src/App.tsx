import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import NewsDetails from "./pages/newsDetails/NewsDetails";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/newsDetails/:Id' element={<NewsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
