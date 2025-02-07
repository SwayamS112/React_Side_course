import './App.css'
import Product from '../pages/Product'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <>
    <h1 className='navbar'>NAVBAR</h1>
<BrowserRouter> 

{/* these are link as a ancor tag */}
<Link to="/home">Home</Link><br></br>
<Link to="/product">Product</Link><br></br>
<Link to="/profile">Profile</Link><br></br>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>

</BrowserRouter>
 </>
  )
}

export default App
