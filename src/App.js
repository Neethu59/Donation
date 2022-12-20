
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import About from './Component/About/About';
import Cloth from './Component/Cloth/Cloth';
import Causes from './Component/Causes/Causes';
import Events from './Component/Events/Events';
import Blog from './Component/Blog/Blog';
import Food from './Component/Food/Food';
import Volunteer from './Component/Volunteer/Volunteer';
import Edit from './Component/Edit/Edit';
import Update from './Component/Update/Update';
import Add from './Component/Add/Add';
import Logout from './Component/Logout/Logout';

function App() {

 
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/causes" element={<Causes/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/events" element={<Events/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/food" element={<Food />}/>
    <Route path="/cloth" element={<Cloth />}/>
    <Route path="/volunteer" element={<Volunteer/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>
    <Route path="/update/:id" element={<Update/>}/>
    <Route path="/add/:id" element={<Add/>}/>
    <Route path="/logout" element={<Logout/>}/>
    
    
    
 </Routes>
  </BrowserRouter>
  );
}

export default App;
