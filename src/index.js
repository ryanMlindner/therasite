import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from "recoil";
import App from "./components/App";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);

