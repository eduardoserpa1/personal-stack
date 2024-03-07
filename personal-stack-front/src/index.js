import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./routes/Home"
import Author from "./routes/Author"
import Projects from "./routes/Projects"
import Account from "./routes/Account"
import Header from "./components/Shared/Header"

import './visual/fonts/ttf/JetBrainsMono-Regular.ttf'
import './visual/fonts/ttf/JetBrainsMono-Bold.ttf'
import './visual/fonts/ttf/JetBrainsMono-Light.ttf'
import './visual/fonts/ttf/JetBrainsMono-Italic.ttf'
import './visual/fonts/ttf/JetBrainsMono-ExtraBold.ttf'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "JetBrainsMono";
    src: local("JetBrainsMono-Regular"),
    url("./visual/fonts/ttf/JetBrainsMono-Regular.ttf") format("truetype") font-weight-normal,
    url("./visual/fonts/ttf/JetBrainsMono-Bold.ttf") format("truetype") font-weight-bold,
    url("./visual/fonts/ttf/JetBrainsMono-Light.ttf") format("truetype") font-weight-thin,
    url("./visual/fonts/ttf/JetBrainsMono-Italic.ttf") format("truetype") font-italic,
    url("./visual/fonts/ttf/JetBrainsMono-ExtraBold.ttf") format("truetype") font-weght-extrabold;
  }

  html,body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 

    font-family: 'JetBrainsMono';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
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
      <Route path="/Author" element={<Author />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
