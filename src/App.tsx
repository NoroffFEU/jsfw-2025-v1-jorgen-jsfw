// src/App.tsx

// import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Searchbar />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
