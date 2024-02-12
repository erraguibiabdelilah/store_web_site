import React, { useRef } from 'react'
import {useNavigate } from 'react-router-dom';


export default function Admin() {
 const email=useRef();
 const password=useRef();

 const navigate = useNavigate();
 const handelSubmit=(e)=>{
    e.preventDefault();
    if(email.current.value==="abdelilah@gmail.com" && password.current.value==="1234")
    {
        navigate('/AddPproduct')
    }
    else{
       
           navigate('/blocked')
                   
        }
   
 }
  return (<>
        <h2 className='text-center mt-5'>LOGIN</h2>
    <form className='container ' style={{width:"50% "}}>
    <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control"  ref={email} required/>
    </div>
    <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={password}  required/>
    </div>
    <div className="form-group">
            <input type="submit" value="LOGIN" onClick={handelSubmit} className="form-control btn btn-primary rounded-2 my-3"/>
        
     </div>
    </form>
   
    

</>
  )
}
 