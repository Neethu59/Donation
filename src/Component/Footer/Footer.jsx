import React from 'react'
import'./Footer.css';
export default function Footer() {
  return (
    <>
    <div className='bg'>
    <div className='row'style={{marginTop:"5%"}}>
<div class="col-sm-1"></div>
    <div class="col-sm-3">
      <div id="sm4">
      <h1 className='charty'>Charity</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
  tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>2736 Hinkle Deegan Lake Road</p>
  <p> 607-279-9246</p>
  <h6>Charity@email.com</h6>
    </div></div>
    <div class="col-sm-4">
      <h2>Galery</h2>
      <div className='galery'>
        <img src="assets/gallery1.jpeg"id="gal"></img>
        <img src="assets/galery2.webp"id="gal"></img>
        <img src="assets/galery3.webp"id="gal"></img>
      </div>
      <div className='galery'>
        <img src="assets/galery4.webp"id="gal"></img>
        <img src="assets/galery5.webp"id="gal"></img>
        <img src="assets/galery6.webp"id="gal"></img>
      </div>

    </div>
    <div class="col-sm-3">
      <h3>Newsletter</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      <input type="text" placeholder='Enter your email' style={{marginTop:"2%",width:"80%",padding:"2%"}}></input>
      <div><button style={{marginTop:"10%",color:"white",backgroundColor:"green",padding:"2%",width:"80%",}}>Subscribe</button></div>
      
    </div>
    <div class="col-sm-1"></div>
</div>
    </div>

    </>
  )
}
