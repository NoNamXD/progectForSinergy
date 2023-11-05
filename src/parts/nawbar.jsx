import { Link } from "react-router-dom";
import "./localStale.css";
const Nawbar =(()=>{
    return(
        <div className="nawbar">
            <Link className="link" to="/Home">RuSite</Link>
        <div>
            <Link className="link" to="/Jokes">Jokes</Link>
         </div>
        <div>
            <Link className="link" to="Chat">Chat</Link>
        </div>
            <Link className="link" to="/Acount">Acount</Link>
        </div>
    )
})
export default Nawbar