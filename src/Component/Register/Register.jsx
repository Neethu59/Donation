import React, { useState } from 'react'
import './Register.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [input, setinput] = useState({
   username: "",
    password: "",
    name: "",
    address: "",
    phone: ""

  })
  const navigate=useNavigate()
  const setRegister = (event) => {

    const { name, value } = event.target
    setinput({
      ...input, [name]: value

    })
    console.log(input);
  }
  const notify = (data) => toast(data);

  const registerSubmit = (event) => {
    event.preventDefault()
    if (input.username == ""||input.password==""||input.name==""||input.address==""||input.phone=="") {
      console.log("hhhi");
      notify("please enter the data")
    }
   
    else {

      axios.post('http://localhost:5000/api/register', input,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => {
          console.log(response)
          const file = response.data.message
          console.log(file);
          notify(file)
          navigate('/')
        }).catch((err) => {
          console.log(err);
          console.log(err.response.data.message);
          notify(err.response.data.message)
        })

    }

  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />      
      
      <div id="log">
      <form onSubmit={registerSubmit} >
        <div class='card' id="card1">
          <div class='card-body-center' id="card-body">

            <div className='fb'>
              <input type="text" placeholder='username' name="username" value={input.username || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="password" placeholder='password' name="password" value={input.password || ""} onChange={setRegister} id="password" /><br /><br />

              <input type="text" placeholder='name' name="name" value={input.name || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="text" placeholder='Address ' name="address" value={input.address || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="number" placeholder='contactnumber' name="phone" value={input.phone || ""} onChange={setRegister}  id="password" /><br /><br />
              <input type="submit" value="Sign Up" required id="btn" /><br />

            </div>
          </div></div>
      </form>
      </div>
      
    </>
  )
}
