import React, { useEffect } from "react";
import Home from "./Home";
import Cartes from "./cartes";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import { StoreContexe } from "./storeContexe";
import { Provider } from "react-redux";
import store from "./store";
import Admin from './Admin';
import AddProduct from "./AddProduct";
import Blocked from "./Blocked";
import CategoryPc from "./categoryPc";
import CategoryTel from "./categoryTel";
import ListeProduct from "./ListeProduct";

export default function App(){
    const [v_search,setv_search]=useState(null);
    const [products,setProduct]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3100/myData")
        .then(Response=>Response.json())
        .then((data)=>setProduct(data));
         
    },[])
    const product=products.filter((product)=>{return v_search!=null? product.name.startsWith(v_search):products });
     console.log(v_search);
     console.log(product);
    return(<>

    
    <Provider store={store}>
        <StoreContexe.Provider value={
        {product} 
        
    }>
            <BrowserRouter>
            <Header valueSrearch={(valuer)=>{setv_search(valuer)}}/>
            
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/ordinateur" element={<CategoryPc/>}/>
                <Route path="/AddPproduct" element={<AddProduct/>}/>
                <Route path="/ListeProduct" element={<ListeProduct/>}/>
                <Route path="/telf" element={<CategoryTel/>}/>
                <Route path="blocked" element={<Blocked/>}/>
                <Route path="/cart" element={<Cartes/>}/>
            </Routes>
            </BrowserRouter>
        
    </StoreContexe.Provider>
    </Provider>
    
    
      
    
    
    </>)
}