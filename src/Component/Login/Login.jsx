import React,{useState}from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import'./Login.css';
export default function Login() {
  const [input, setinput] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    again: ""

  })
  const navigate=useNavigate()

// const[postdata,setpostdata]=useState('')
  const setRegister=(event)=>{

      const{name,value}=event.target
      setinput({
        ...input,[name]:value

      })
      console.log(input);
      }
      const notify = (data) => toast(data);

      const registerSubmit =(event)=>{
       event.preventDefault()
       if (input.username == ""||input.password=="") {
        console.log("hhhi");
        notify("please enter the data")
      }
      
      else {
       
       
      axios.post('http://localhost:5000/api/login/logindata',input,
      {
        headers:{
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response=>{
       console.log(response)
       const file=response.data.loginId
       console.log(file);
       const key ="loginid";
       
        localStorage.setItem(key,file)
    
    
    
       navigate('/home')
      //  const file=response.data.message
      //  console.log(file)

      }).catch((err)=>{
        console.log(err);
        console.log(err.response.data.message);
        notify(err.response.data.message)
      })
      
      }}
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
 <form onSubmit={registerSubmit}>
             <div class='card'id="card1">
                <div class='card-body-center'id="card-body" >
             
             <div className='fb'>
                <input type="text" placeholder='Username'name="username"value={input.username||""}onChange={setRegister}  id="password"/><br /><br />
                 <input type="password" placeholder='password 'name="password" value={input.password||""} onChange={setRegister} id="password"/><br /><br />
               {/* <div id="sign"> */}
                <input type="submit" value="Login" required id="btn"style={{padding:"10px",borderRadius:"50px",border:"null"}}/><br /><p style={{marginLeft:"5%",borderRadius:"50px",color:"red"}}>No account?</p>
                <input type="button" value="Sign in" id="password" onClick={()=>{navigate('/register')}}></input>
                {/* </div> */}
             </div>
</div></div>
</form>
</div> 


</>
  )
}
