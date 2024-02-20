import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./routes/Home"
import Header from "./components/Header"

import './visual/fonts/ttf/JetBrainsMono-Regular.ttf'
import './visual/fonts/ttf/JetBrainsMono-Bold.ttf'
import './visual/fonts/ttf/JetBrainsMono-Light.ttf'
import './visual/fonts/ttf/JetBrainsMono-Italic.ttf'
import './visual/fonts/ttf/JetBrainsMono-ExtraBold.ttf'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "JetBrainsMono";
    src: local("JetBrainsMono-Regular"),
    url("./visual/fonts/ttf/JetBrainsMono-Regular.ttf") format("truetype") font-weght-normal,
    url("./visual/fonts/ttf/JetBrainsMono-Bold.ttf") format("truetype") font-weght-bold,
    url("./visual/fonts/ttf/JetBrainsMono-Light.ttf") format("truetype") font-weght-thin,
    url("./visual/fonts/ttf/JetBrainsMono-Italic.ttf") format("truetype") font-italic,
    url("./visual/fonts/ttf/JetBrainsMono-ExtraBold.ttf") format("truetype") font-weght-extrabold;
  }

  body {
    margin: 0;
    font-family: 'JetBrainsMono';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />  

    <BrowserRouter>
      <Header />

      <Routes>
      <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
