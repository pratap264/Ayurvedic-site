import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Doshas from './components/Doshas';
import Services from './components/Services';
import Products from './components/Products';
import Journal from './components/Journal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Doshas />
        <Services />
        <Products />
        <Journal />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
