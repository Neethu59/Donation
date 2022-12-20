import React from 'react'
import  Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function Events() {
  return (
    <>
    <Navbar/>
    <div class="bg_image"style={{paddingBottom:"5%"}}>
        <center><h1 className='save'style={{color:"white"}}>Single Events Page</h1>
        <h5 style={{color:"white",marginRight:"40%",}}>Home/Events</h5> </center>
      
    </div>
    
        <div class="row" style={{marginTop:"2%"}}>
            <div class="col-sm-1"></div>
            <div class="col-sm-6">
                <img src="assets/causes1.jpeg"style={{height:"40%",width:"100%"}}/>
                <h2>Possit Nostro Aeterno Eu Vis, Ut Cum Quem Reque</h2>
                <h6 style={{fontWeight:"20%"}}>12 November 2018 By John doe 0 Comments</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           <h2>Leave a reply</h2> 
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
           <input type="text" id="replay"placeholder="Name"></input>
           <input type="text"id="replay"placeholder="Email"></input>
           <input type="text"id="replay"placeholder="Website"></input>
           <input type="text"placeholder="Message"style={{width:"30%",marginTop:"2%",padding: "5%",
    width: "70%",
    marginTop:"2%" ,
    marginLeft:"3%"}}></input>
    <div><button style={{marginTop:"5%",color:"white",backgroundColor:"green",border:"none",padding:"2%",marginLeft:"3%"}}>Submit</button>    
          </div>
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
            </div>
        </div>
    <Footer/>
    </>
  )
}
