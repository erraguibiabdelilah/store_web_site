import React, { useContext } from 'react'
import { StoreContexe } from './storeContexe'
import { useDispatch } from 'react-redux'
import { handelClick } from "./cartSlice";
import { Link } from 'react-router-dom';

export default function CategoryTel(){
    const contexe=useContext(StoreContexe)
    const dispatcher=useDispatch()

      const display=()=>contexe.product.map((productItems ,key )=>{
       if( productItems.category=="tel"){
        return(
         <div className="col-4 " key={key}>
          <div className="card" style={{width: '18rem'}} key={key}>
              <img src={productItems.image} width={"286px"}
    height={"189.7px"} className="card-img-top" />
              <div className="card-body">
                  <h5 className="card-title">{productItems.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button onClick={()=>{
                    let items=null;
                    items={...productItems,quantiter:1}
                    dispatcher(handelClick(items)) }} className="btn btn-primary" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                              </svg>  get in cartes</button>
              </div>
              </div>
          </div>
  
         )}
              
        
              
      })
    
      return(<> 
        <nav className="navbar navbar-expand-lg w-50 my-5" style={{marginLeft:"35%",color:"black", background: "white"}} >
            <div className="container-fluid">
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link  className="nav-link active  mx-2" aria-current="page" to="/">All</Link> 
                    <Link  className="nav-link  mx-2" aria-current="page" to="/ordinateur">Ordinateur</Link> 
                    <Link  className="nav-link  mx-2" aria-current="page" to="/telf">telephone</Link>    
                     </div>
                </div>
            </div>
    </nav>

  <div className="container overflow-hidden text-center">
    <div className="row gy-5">  {display()}
      </div>
    </div></>
   
  

)
}