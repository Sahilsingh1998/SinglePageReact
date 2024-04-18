import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/aboutus' Component={Aboutus}></Route>
        <Route path='/contacts' Component={Contacts}></Route>
        <Route path='/services' Component={Services}></Route>
        <Route path='/' Component={Error}></Route>
      </Routes>

    </>
  )
}

export default App