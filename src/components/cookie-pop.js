import { useState } from "react"
import {Link} from "react-router-dom"
import "../css/cookie-pop.css"

export default function CookiePop(){
    
    const [close, setClose] = useState(false)
    const handleClose = ()=>{
        setClose(true)
    }

    return(
        <>
        {close ? null : (
             <div className="cookie-pop">
             <p>By using this website, you agree to our <Link to="/cookies">cookie policy</Link></p>
             <button onClick={handleClose}>Dismiss</button>
         </div>
        )}
           
        </>
    )
}