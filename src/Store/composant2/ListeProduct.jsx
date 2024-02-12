import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import { StoreContexe } from './storeContexe'
export default function ListeProduct() {
    const contexe=useContext(StoreContexe)
   
      const display=()=>contexe.product.map((productItems ,key )=>{
         return(
         <ul  key={key} >
                <li> <h5 className="card-title">{productItems.name}</h5></li> 
                  <li style={{textDecoration:"none"}}><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </li> 
                    <button className='bnt btn-danger '>delet_product</button>
                <hr />                 

          </ul>
  
         )
              
        
              
      })
   
  return (
    <div>
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

        <div className='container'>{display()}</div>
        
    </div>
  )
}
