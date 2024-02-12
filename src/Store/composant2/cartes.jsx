import { useDispatch, useSelector } from "react-redux";
import { decrement, handelDelete, increment } from "./cartSlice";

export default function Cartes(){
  
    const despatcher=useDispatch()
    const {cartItems}=useSelector(state=>state.cart)
    const display=()=>cartItems.map((cartItem ,key )=>{
        return(
            
            <tr key={key}>
          
            <td><img src={cartItem.image} style={{width:'60px',height:'60px'}}/></td>
            <td>{cartItem.name}</td>
            <td>
            <svg onClick={()=>despatcher(increment(cartItem))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-info mx-1" viewBox="0 0 16 16">
                <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"/>
            </svg>{cartItem.quantiter}
           
            <svg onClick={()=>despatcher(decrement(cartItem))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down text-info mx-1" viewBox="0 0 16 16">
                 <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
            </svg>
              </td>
            <td>${cartItem.price}</td>
            <td >${cartItem.price*cartItem.quantiter}</td>
            <td>
                 <svg onClick={()=>despatcher(handelDelete(cartItem))} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash text-danger" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                
            </td>
            </tr>
             
        
        )})
        const totale=cartItems.reduce((acc,cartItem)=>acc+=cartItem.price*cartItem.quantiter+5,0)
        const Subtotal=cartItems.reduce((acc,cartItem)=>acc+=cartItem.price*cartItem.quantiter,0)
       
    return(
        <div className="container">
        <table className="table">
            <thead>
                <tr>
            
                <th scope="col">image</th>
                <th scope="col">name</th>
                <th scope="col">quantité</th>
                <th scope="col">prix</th>
                <th scope="col">total_produit</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {display()}
               {/* <tr>
                    <th colSpan={5}  className="text-center">Totale</th>
                    <td > </td>
    </tr>*/}
            </tbody>
           
            
            </table>
            <div className="container w-25 rounded-5" style={{with:"25%" ,float:"right",backgroundColor:"#80808036"}}>
                <h3 className="text-center">Cart Total</h3>
                <span >Subtotal: <h6>${Subtotal}</h6></span>
                <br />
                <span >Shipping: <h6> $5</h6></span>
                <br />
                <hr style={{with:"100px"}} />
                <span >Total:      <h6> ${totale}</h6></span>
                <br />
                <input className="form-control btn btn-secondary rounded-2 my-3"
                type="submit" value="payer" />
                </div>
        </div>
    )
}