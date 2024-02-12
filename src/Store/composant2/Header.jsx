import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'

export default function Header({valueSrearch}){
 //const contexe=useContext(StoreContexe)
  const select=useSelector(state=>state.cart)
  const dataSearch=useRef(null);
 const handelSearch=(e)=>{
    e.preventDefault();
    valueSrearch(dataSearch.current.value)
}
    return(
    <>
    <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-4"data-bs-theme="dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                   
                   <motion.span
                     initial={{
                        opacity:0
                    }}
                     animate={{
                         opacity:1,
                         color:'#767B7A'
                     }}
                     transition={{
                        duration:1,
                        repeat:Infinity
                     }}
                   >𝓐</motion.span>
                   BDELILAH_
                   
                   <motion.span
                     initial={{
                        opacity:0
                    }}
                     animate={{
                         opacity:1,
                         color:'#767B7A'
                     }}
                     transition={{
                        duration:1,
                        repeat:Infinity
                     }}
                   >𝕊</motion.span>TORE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link  className="nav-link  mx-2" aria-current="page" to="/">Home</Link>
                            <form className="d-flex" role="search" style={{position:"relative",left: "1rem"}}>
                            <input className="form-control me-2" ref={dataSearch} type="search" placeholder="Search" aria-label="Search"/>
                            <button onClick={handelSearch} className="btn btn-dark" type="submit">Search</button>
                            </form>
                        <Link className="nav-link mx-3" to="/cart" style={{position:"relative",left: "33rem"}}>
                            <motion.svg
                             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16"
                             initial={{opacity:0,
                                scale:0.5
                            }}
                             animate={{
                                 opacity:1,
                                 
                                 scale:1.3
                             }}
                             transition={{
                                duration:2,
                                repeat:Infinity
                             }}
                             >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </motion.svg>({select.cartItems.length})
                        </Link>

                        <Link className="nav-link  mx-2" aria-current="page" style={{position:"relative",left: "32rem"}} to="/admin">Admin</Link>
                    </div>
                    </div>
                </div>
        </nav>

    </div>
</>)
}