import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Banner from '../Banner/Banner.jsx';
import Appartement from '../AppartementHomePage/Appartement.jsx';
import Footer from '../Footer/Footer.jsx';
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Appartement />
      <Footer />
    </div>
  )
}

export default Home;