import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import About from './About';

import TextForm from './TextForm';

export default function AppRoutes() {
  
	return (
		<BrowserRouter>
    <Navbar title="Text" sec= "Utils"/>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="This is text box" />} />
      </Routes>
    </BrowserRouter>
	)
}