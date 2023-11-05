
import { useState } from "react"
import { useEffect } from "react";
const ApiJokes =(()=>{
    const [joke, setJoke] = useState(null)

    useEffect(() => {
    fetch('https://geek-jokes.sameerkumar.website/api').then(response => response.json()).then(joke => setJoke(joke))}, [])
    return(
        <div className="jokeCenter">
            <div/>
            <div className="jokesGlobalStiles">
            <div>Глуппые шутки на английском для поднятия настроения</div>
                <div className="jokeWindow">{joke}</div>
            </div>
            <div/>
        </div>
    )
})

export default ApiJokes