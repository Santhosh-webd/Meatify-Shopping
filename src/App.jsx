import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Home } from './Home'
import { Aboutus } from './Aboutus'
import { Product } from './Product'
import { Cart } from './Cart'
import { Login } from './Login'
import { Chicken } from './Chicken'
import { Mutton } from './Mutton'
import { Fish } from './Fish'
import { Prawn } from './Prawn'
import { Crab } from './Crab'
import { CountryChicken } from './CountryChicken'
import { Egg } from './Egg'
import { Pickle } from './Pickle'

function App() {

  const [cartdetails,setCartdetails] = useState([])
  const cartCount = cartdetails.length
  const [headdesign, setHeaddesign] = useState("home");

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<Header cartCount = {cartCount} headdesign={headdesign} setHeaddesign={setHeaddesign}></Header>}>
          <Route path='/' element={<Home setHeaddesign={setHeaddesign}></Home>}></Route>
          <Route path='/aboutuspg' element={<Aboutus setHeaddesign={setHeaddesign}></Aboutus>}></Route>
          <Route path='/productpg' element={<Product></Product>}></Route>
          <Route path='/cartpg' element={<Cart cartdetails={cartdetails} setCartdetails={setCartdetails} setHeaddesign={setHeaddesign}></Cart>}></Route>
          <Route path='/Chicken' element={<Chicken cartdetails={cartdetails} setCartdetails={setCartdetails} ></Chicken>}></Route>
          <Route path='/Mutton' element={<Mutton cartdetails={cartdetails} setCartdetails={setCartdetails} ></Mutton>}></Route>
          <Route path='/Fish' element={<Fish cartdetails={cartdetails} setCartdetails={setCartdetails} ></Fish>}></Route>
          <Route path='/Prawn' element={<Prawn cartdetails={cartdetails} setCartdetails={setCartdetails} ></Prawn>}></Route>
          <Route path='/Crab' element={<Crab cartdetails={cartdetails} setCartdetails={setCartdetails} ></Crab>}></Route>
          <Route path='/CountryChicken' element={<CountryChicken cartdetails={cartdetails} setCartdetails={setCartdetails} ></CountryChicken>}></Route>
          <Route path='/Egg' element={<Egg cartdetails={cartdetails} setCartdetails={setCartdetails} ></Egg>}></Route>
          <Route path='/Pickle' element={<Pickle cartdetails={cartdetails} setCartdetails={setCartdetails} ></Pickle>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
