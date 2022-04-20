import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';

function App() {
  return (

<React.Fragment>
<Header></Header>
<Footer></Footer>
<Navbar></Navbar>
<Menu></Menu>

</React.Fragment>
  );
}

export default App;
