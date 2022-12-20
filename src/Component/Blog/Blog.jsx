import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import'./Blog.css';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
export default function Blog() {
    const navigate=useNavigate()
    const key="loginid"
       const [state, setState] = useState(localStorage.getItem(key))
       useEffect(()=>{
     localStorage.getItem(state)
     if(state!=null)
     {
   navigate('/blog')
     }
     else{
      navigate('/')
     }
     },[])
      console.log(state)
  

  return (
    <>
    <Navbar/>
 <div class="bg_image"style={{paddingBottom:"5%"}}>
        <center><h1 className='save'style={{color:"white"}}>Blog Page</h1>
        <h5 style={{color:"white",marginRight:"40%",}}>Home/Blog</h5> </center>
      
    </div>
    
    <div class="row">
        <div class="col-sm-1"></div>
            <div class="col-sm-6">
<img src="assets/blog1.webp"id="blogimg"/>
<h3>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque </h3>
<p>12 November 2018 By John doe 0 Comments</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<img src="assets/blog2.webp"id="blogimg"/>
<h3>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque </h3>
<p>12 November 2018 By John doe 0 Comments</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<img src="assets/blog3.webp"id="blogimg"/>
<h3>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque </h3>
<p>12 November 2018 By John doe 0 Comments</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
            
            <div class="col-sm-1"></div>
            <div class="col-sm-3">
                <h2>Category</h2>
                <div>
                    <h6>Health<span id="category">(57)</span></h6>
                    <h6>Food<span  id="category">(86)</span></h6>
                    <h6>Education<span  id="category">(241)</span></h6>
                    <h6>Donation<span  id="category">(65)</span></h6>
                    <h6>Event<span  id="category">(14)</span></h6>
                </div>
                <div class="col-sm-1"></div>

                <h4>Latest Posts</h4>
                <div className='posts'>
                    <img src="assets/posts1.webp"></img>
                    <h6 style={{marginLeft:"2%"}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h6>
                </div>
                <p>By John doe 12 November 2018</p>
                <div className='posts'>
                    <img src="assets/posts2.webp"></img>
                    <h6 style={{marginLeft:"2%"}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h6>
                </div>
                <p>By John doe 12 November 2018</p>
                <div className='posts'>
                    <img src="assets/posts3.webp"></img>
                    <h6 style={{marginLeft:"2%"}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h6>
                </div>
                <p>By John doe 12 November 2018</p>

                <div style={{marginTop:"15%"}}>
                <h4 >Latest Causes</h4>
                <div className='posts'>
                    <img src="assets/posts1.webp"></img>
                    <h6 style={{marginLeft:"2%"}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h6>
                </div>
                <p>Raised:<span id="raise">52.000$</span> - Goal: <span id="raise">90.000$</span></p>
                <div className='posts'>
                    <img src="assets/posts2.webp"></img>
                    <h6 style={{marginLeft:"2%"}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h6>
                </div>
                <p>Raised:<span id="raise"> 52.000$</span> - Goal:<span id="raise"> 90.000$</span></p>
                <div className='posts'>
                    <img src="assets/posts3.webp"></img>
                    <h6 style={{marginLeft:"2%"}}>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h6>
                </div>
                <p>Raised:<span id="raise"> 52.000$ </span>- Goal: <span id="raise">90.000$</span></p>
                </div>    
            
            
            </div></div>
            <Footer/>      
    </>
  )
}
