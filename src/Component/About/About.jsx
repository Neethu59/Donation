import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import'./About.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
export default function About() {
  const navigate=useNavigate()
  const key="loginid"
     const [state, setState] = useState(localStorage.getItem(key))
     useEffect(()=>{
   localStorage.getItem(state)
   if(state!=null)
   {
 navigate('/about')
   }
   else{
    navigate('/')
   }
   },[])
    console.log(state)



  return (
    <>
    <Navbar/>
    <div class="bg_image">
        <div className='cause'>
    <center>
    <h1 className='causes'>Our Causes</h1>
    <div className='para2'>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
  <p>tempor incididunt ut labore et dolore magna aliqua.</p></div>
    {/* </center> */}
    <div className="row"id="card" style={{marginLeft:"2%"}}>
      
    <div class="col-sm-4">
    <img class="card-img-top" src="/assets/blog1.webp"  style={{width:"350px"}}/>
    <div class="card"style={{width:"350px",marginTop:"10%",border:"none"}}>
    
    
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
        <a href="#" class="btn btn-success">Donate Now</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
  <img class="card-img-top" src="/assets/blog2.webp" style={{width:"350px"}}/>
    <div class="card"style={{width:"350px",marginTop:"10%",border:"none"}}>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
        <a href="#" class="btn btn-success">Donate Now</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
  <img class="card-img-top" src="/assets/blog3.webp" style={{width:"350px"}}/>
    <div class="card"style={{width:"350px",marginTop:"10%",border:"none"}}>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
        <a href="#" class="btn btn-success">Donate Now</a>
      </div>
    </div>
  </div>

 
  </div> 
  </center>


</div>
<div className='data'>
<h1 className='save'>Bcome a Volunteer</h1>
        <h5>When generous people like you make a donation to Save the Children, </h5>
          <h5 className='save1'>children's lives are saved and their futures are brighter. </h5>
          <button className='view'><Link to={'/volunteer'}>View Details</Link></button>
</div>

<div className='cause'>
    <center>
    <h1 className='causes'>Upcoming Events</h1>
    <div className='para2'>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
  <p>tempor incididunt ut labore et dolore magna aliqua.</p></div>
    </center>
{/* <div class="container"> */}
  <div class="row">
    <div class="col-sm-1"></div>
 <div class="col-sm-2"><img src="assets/event1.jpeg" style={{height:"200px",width:"250px"}}/></div>
 <div class="col-sm-3"> <p style={{marginLeft:"25px"}}><h5>gbhnjm</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
 <div class="col-sm-2"><img src="assets/event2.jpeg"style={{height:"200px",width:"250px"}}></img></div>
<div class="col-sm-3">  <p style={{marginLeft:"25px"}}><h5>hjkl</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
<div class="col-sm-1"></div>
{/* </div> */}
</div></div>
<div className='image'>
{/* <p style={{marginLeft:"10%"}}>hjkl</p> */}
{/* <span style={{marginLeft:"10%"}}>hjkl</span> */}
<img src="assets/face1.jpeg"id="face1" >
  
</img><span id="spa">Jhone Doe</span>



<img src="assets/face2.jpeg"id="face2"></img><span id="spa">Jhon Doe</span>
</div>
  <div class ="card-desk">
    <div class="card" style={{height:"100px",width:"550px",marginLeft:"10%"}}>
      <p className='para3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  <span class="card"style={{height:"100px",width:"550px",marginLeft:"5%"}}><p className='para3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span>


</div>




    </div>
    <div className='cause'>
    <center>
    <h1 className='causes'>Our Blog</h1>
    <div className='para2'>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
  <p>tempor incididunt ut labore et dolore magna aliqua.</p></div>
    </center>
   </div>
   <div class="container"id="web">
  <img src="assets/blog1.webp" style={{height:"300px",width:"350px"}}/>
  <img src="assets/blog2.webp" style={{height:"300px",width:"350px",marginLeft:"4%"}}/>
  <img src="assets/blog3.webp" style={{height:"300px",width:"350px",marginLeft:"4%"}}/>
 {/* <img src="assets/child.webp"style={{height:"200px",width:"250px",marginLeft:"7%"}}></img> */}
 </div>
 <div class="container"style={{marginTop:"-4%"}}>
 
  <p style={{height:"100px",width:"300px"}}> <p>12 November 2018 By John doe 0 Comments</p><h5>fghjk</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p style={{height:"100px",width:"300px",marginLeft:"10%"}}> <p>12 November 2018 By John doe 0 Comments</p><h5>rtyghuji</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p style={{height:"100px",width:"300px",marginLeft:"10%"}}> <p>12 November 2018 By John doe 0 Comments</p><h5>fghj</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 {/* <p style={{height:"200px",width:"250px",marginLeft:"7%"}}><h5>ghjk</h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
 </div>
 <Footer/>
    </>
  )
}
