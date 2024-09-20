'use client' 

import { useState, useEffect } from "react";
import "./components/styles.css"
import HambMenu from './components/hambMenu';
import Cursor from "./components/cursor";
import Home from './pages/home/page';

export default function Page() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="preloader">
        <div className="loader_line"></div>
      </div>
    );
  }

  return (
      <div
        className="kioto_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="rollIn"
        data-exit="rollOut"
      >
        < HambMenu />
        <Cursor />
        <div className="mouse-cursor">
          <div className="cursor-inner"></div>
          <div className="cursor-outer"></div>
        </div>
          <Home/>
      </div>
  );
};

