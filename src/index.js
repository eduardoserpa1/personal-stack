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

import TravellerGeneticParallel from './routes/projects/TravellerGeneticParallel'
import BetManager from './routes/projects/BetManager'
import BackendSpringMicroservices from './routes/projects/BackendSpringMicroservices'
import ReactStudy from './routes/projects/ReactStudy'
import NodeStudy from './routes/projects/NodeStudy'
import ReactNodeStudy from './routes/projects/ReactNodeStudy'
import GeneticAlgorithm from './routes/projects/GeneticAlgorithm'
import NqueensVariationProblem from './routes/projects/NqueensVariationProblem'
import DynamicHighestSumpath from './routes/projects/DynamicHighestSumpath'
import MonitorDeRede from './routes/projects/MonitorDeRede'
import Seturo from './routes/projects/Seturo'
import T2PbnJogoDaSenha from './routes/projects/T2PbnJogoDaSenha'
import QuebraCabecaPbn from './routes/projects/QuebraCabecaPbn'
import GinsengNetworks from './routes/projects/GinsengNetworks'
import Automarket from './routes/projects/Automarket'
import SpaceInvaders from './routes/projects/SpaceInvaders'
import TombDefense from './routes/projects/TombDefense'
import VigenereCipher from './routes/projects/VigenereCipher'
import TfRedes from './routes/projects/TfRedes'
import T2RedesAv from './routes/projects/T2RedesAv'

import './visual/fonts/ttf/JetBrainsMono-Regular.ttf'
import './visual/fonts/ttf/JetBrainsMono-Bold.ttf'
import './visual/fonts/ttf/JetBrainsMono-Light.ttf'
import './visual/fonts/ttf/JetBrainsMono-Italic.ttf'
import './visual/fonts/ttf/JetBrainsMono-ExtraBold.ttf'

const RouteGitHubPrefix = "personal-stack"

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
      <Route path={"/"} element={<Projects />} />
      <Route path={"personal-stack/"} element={<Projects />} />
      <Route path={"personal-stack/Home"} element={<Home />} />
      <Route path={"personal-stack/Author"} element={<Author />} />
      <Route path={"personal-stack/Projects"} element={<Projects />} />
      <Route path={"personal-stack/Account"} element={<Account />} />
      
      <Route path={"personal-stack/Projects/TravellerGeneticParallel"} element={<TravellerGeneticParallel />} />
      <Route path={"personal-stack/Projects/BetManager"} element={<BetManager />} />
      <Route path={"personal-stack/Projects/BackendSpringMicroservices"} element={<BackendSpringMicroservices />} />
      <Route path={"personal-stack/Projects/ReactStudy"} element={<ReactStudy />} />
      <Route path={"personal-stack/Projects/NodeStudy"} element={<NodeStudy />} />
      <Route path={"personal-stack/Projects/ReactNodeStudy"} element={<ReactNodeStudy />} />
      <Route path={"personal-stack/Projects/GeneticAlgorithm"} element={<GeneticAlgorithm />} />
      <Route path={"personal-stack/Projects/NqueensVariationProblem"} element={<NqueensVariationProblem />} />
      <Route path={"personal-stack/Projects/DynamicHighestSumpath"} element={<DynamicHighestSumpath />} />
      <Route path={"personal-stack/Projects/MonitorDeRede"} element={<MonitorDeRede />} />
      <Route path={"personal-stack/Projects/Seturo"} element={<Seturo />} />
      <Route path={"personal-stack/Projects/T2PbnJogoDaSenha"} element={<T2PbnJogoDaSenha />} />
      <Route path={"personal-stack/Projects/QuebraCabecaPbn"} element={<QuebraCabecaPbn />} />
      <Route path={"personal-stack/Projects/GinsengNetworks"} element={<GinsengNetworks />} />
      <Route path={"personal-stack/Projects/Automarket"} element={<Automarket />} />
      <Route path={"personal-stack/Projects/SpaceInvaders"} element={<SpaceInvaders />} />
      <Route path={"personal-stack/Projects/TombDefense"} element={<TombDefense />} />
      <Route path={"personal-stack/Projects/VigenereCipher"} element={<VigenereCipher />} />
      <Route path={"personal-stack/Projects/TfRedes"} element={<TfRedes />} />
      <Route path={"personal-stack/Projects/T2RedesAv"} element={<T2RedesAv />} />
  
     

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
