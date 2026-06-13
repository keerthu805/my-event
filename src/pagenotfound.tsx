import { useNavigate } from "react-router-dom"
import './pagenotfound.css'
export default function Pagenotfound(){
    const route= useNavigate()
    const loginFun=()=>{
        route('/Events')
    }
    return(
        <>
        <div className="pgdiv1">
            <div className="pgdiv2">
                <h1 className="pgh1"><b>404 Error</b></h1>
        <h5><b><i>Oops page not found!!</i></b></h5>
        <button className="btn " onClick={()=>loginFun()}>Events</button>
        </div>
        </div>
        </>
    )
}
