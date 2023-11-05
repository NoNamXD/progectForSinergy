import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/homePage"
import Acount from "../pages/acount"
import Chat from "../pages/chat"
import ApiJokes from "../pages/apiJokes"

const Main =(()=>{
    if(!JSON.parse(localStorage.getItem("chat"))){
        localStorage.setItem('chat', JSON.stringify([]))
    }
    
    return (
        <div>
            <Switch>
                <Route path="/Home" component={HomePage}/>
                <Route path="/Acount" component={Acount}/>
                <Route path="/Jokes" component={ApiJokes}/>
                <Route path="/Chat" component={Chat}/>
            </Switch>

        </div>
    )
})
export default Main