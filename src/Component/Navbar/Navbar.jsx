import React,{useState} from 'react'
import'./Navabar.css';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate=useNavigate()
  const key="loginid"
  const [state, setState] = useState(localStorage.getItem(key))
  console.log(state);

 const logout = () => {

    localStorage.removeItem(key);

    navigate('/')
  }
  return (
    <>
    
    <div className='navbar'>
    <ul>
    <li className='charity'>Charity</li>
        <div className='navbardiv'>
   
  <li><Link to={'/home'}>Home</Link></li>
  <li><Link to={'/about'}>About</Link></li>
  <li><Link to={'/causes'}>Causes</Link></li>
  <li ><Link to={'/events'}>Event</Link></li>
  <li><Link to={'/blog'}>Blog</Link></li>
  <li><a href="#about">Contact</a></li>
  <li><a href="#about">search</a></li>
  {state!=null?<>
  <li id="but"><button onClick= {logout} id="butt">Log out</button></li></>
  :
  <><li><a>Login</a></li> </> }
  
  </div>
</ul>

    </div>
 
    </>
  )
}
