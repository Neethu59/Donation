import React from 'react'
import'./Home.css';
import  Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate=useNavigate()
 const key="loginid"
    const [state, setState] = useState(localStorage.getItem(key))
    useEffect(()=>{
  localStorage.getItem(state)
  if(state!=null)
  {
navigate('/home')
  }
  else{
   navigate('/')
  }
  },[])
   console.log(state)
  
   
  return (
    <>
    <Navbar/>
   <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='/assets/charity1.jpg' alt="Los Angeles"style={{width:"100%"}} />
      <div class="carousel-caption">
        <h1 className='save'>Save  The Childrens</h1>
        <h5>When generous people like you make a donation to Save the Children,</h5> 
          <h5 className='save1'>children's lives are saved and their futures are brighter. </h5>
          <button className='view'>view causes</button>
      </div>   
    </div>
    <div class="carousel-item">
      <img src='/assets/charity2.jpg' alt="Chicago"style={{width:"100%",height:"100%"}}/>
      <div class="carousel-caption">
        <h1 className='save'>Bcome a Volunteer</h1>
        <h5>When generous people like you make a donation to Save the Children, </h5>
          <h5 className='save1'>children's lives are saved and their futures are brighter. </h5>
         
          <button className='view'>Join Us Now!</button>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"id="sp"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"id="sp"></span>
  </a>
</div>
<div class='welcome'>
<div className='row'>
  <div class="wel">
    
<h1>Welcome To Charity</h1>
<p className='para'>Lorem ipsum dolor sitamet, consectetur <span className='line'id="sp"> adipisicing elit, sed do eiusmod tempor</span> incididunt ut labore et dolore magna aliqua.</p>

  <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<span className='line'id="sp"> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</span> enim ad minim veniam, quis nostrud exercitation ullamco laboris<span className='line'id="sp"> nisi ut aliquip ex ea commodo consequat.</span></p>
  <button className='view'>Read more</button>
  </div>
  <div className='col-sm-1'></div>
 <div className="col-sm-2"  id="sm2">   <img src='/assets/child.webp'style={{paddingTop:"10%",borderRadius:"10%",marginTop:"25%",height:"95%"}}></img></div>
  </div>
</div>

<center>
<div className="row"id="card">

  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h1>47K</h1>
        <p>Donors</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h1 >154K</h1>
        <p>Children Saved</p>
      </div>
    </div>
  </div>

  
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h1>785K</h1>
        <p>Donated</p>
      </div>
    </div>
  </div>
  
</div>

</center>

<div className='food1' style={{marginTop:"5%"}}>
  <center>
  <h1>Healthy Food Bank Donation</h1>
  <img src='assets/food.jpeg'style={{height:"40%",width:"70%"}}></img>
  
  </center>
  {state==""?"":
  <button style={{marginLeft:"50%",padding:"1%" ,backgroundColor:"green",color:"white",border:"none",
  marginTop:"5%",borderRadius:"10%"}}><Link to={'/food'}>View Details</Link></button>}
</div>


<div className='food1' style={{marginTop:"5%"}}>
  <center>
  <h1>Cloth Donation</h1>
  <img src='assets/cloth.jpeg'style={{height:"40%",width:"70%"}}></img>
  
  </center>
  {state==""?"":
  <button style={{marginLeft:"50%",padding:"1%" ,backgroundColor:"green",color:"white",border:"none",marginTop:"5%",borderRadius:"10%"}}><Link to={'/cloth'}>View Details</Link></button>}
</div>



<Footer/>
    </>
    
  )
}
