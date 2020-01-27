import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Breadcrumbs from './Components/Body/Breadcrumbs/Breadcrumbs'
import Middle from './Components/Body/middle/Middle'
import Third from './Components/Body/thirdpart/Third'
import LeftComponent from './Components/Body/leftc/LeftComponent' 
function App() {
  return (
    <div className="App">
  <Navbar />
  <Breadcrumbs />
  <LeftComponent />
  <Middle />
 <Third />
  <Footer />
    </div>
  );
}

export default App;
