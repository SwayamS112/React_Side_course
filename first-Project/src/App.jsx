import './App.css'
import Product from './assets/pages/Product'
import Home from './assets/pages/Home'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <>
    <h1 className='navbar'>NAVBAR</h1>
<BrowserRouter>
<Link to="/home">Home</Link><br></br>
<Link to="/product">Product</Link><br></br>

<Routes>
  
  <Route path='/home' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>

</Routes>
</BrowserRouter>
 </>
  )
}

export default App
