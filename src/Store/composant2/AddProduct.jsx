import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddProduct() {
      

    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    const [id,setId]=useState(0);
    const [image,setImage]=useState();
    const [category,setCategory]=useState();
  return (
    <>
   <nav className="navbar navbar-expand-lg w-50 my-5" style={{marginLeft:"35%",color:"black", background: "white"}} >
                <div className="container-fluid">
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <Link  className="nav-link  mx-2" aria-current="page" to="/AddPproduct">AddProduct</Link> 
                        <Link  className="nav-link  mx-2" aria-current="page" to="/ListeProduct">ListeProduct</Link>    
                         </div>
                    </div>
                </div>
        </nav>
    <form className=" container border my-5 w-50 " > 
    <h3 className='text-center'>Ajouter un Produit </h3>
    <div className="form-group">
        <label className="form-label">id</label>
        <input type="text" className="form-control" onChange={(e)=>{
             setId(Number(e.target.value))
        }}     required/>
    </div>
    <div className="form-group">
        <label className="form-label">name</label>
        <input type="text" className="form-control" onChange={(e)=>{
             setName(e.target.value)
        }}     required/>
    </div>
    <div className="form-group">
    <label className="form-label">Price</label>
        <input type="text" className="form-control" 
        onChange={(e)=>{
            setPrice(Number(e.target.value))
       }} required/>
    </div>
    <div className="form-group">
        <label className="form-label">Image</label>
        <input type="text" className="form-control" onChange={(e)=>{
             setImage(e.target.value)
        }}     required/>
    </div>
    <div className="form-group">
    <label className="form-label">category</label>
        <input type="text" className="form-control" 
        onChange={(e)=>{
            setCategory(Number(e.target.value))
       }} required/>
    </div>


    <div className="form-group">
        
        <input type="submit" onClick={()=>{
            fetch('http://localhost:3100/myData', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({id,name,price,image}),
              });
        }

        } className="form-control btn btn-primary rounded-2 my-3"/>
    </div>
  
 </form>
</>
  )
}
