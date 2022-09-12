import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import NewsDetails from "./pages/newsDetails/NewsDetails";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
