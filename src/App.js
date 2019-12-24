import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Template } from './components/main-components';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}
