import { useState } from "react"
const Chat =(()=>{
    let userName
    if(JSON.parse(localStorage.getItem("registrationData"))){
         userName=JSON.parse(localStorage.getItem("registrationData"))  
    }
    else{
        userName= "NoName"
    }
    const [inputValue, setInputValue]= useState()
    const [massageData, setMassageData]= useState(JSON.parse(localStorage.getItem("chat")))
    

    
    let massage
    const sendMasage=(()=>{
        massage = `${userName.name}: ${inputValue}`
        localStorage.setItem('chat', JSON.stringify(massageData))
        setMassageData([...JSON.parse(localStorage.getItem("chat")), massage])
        setInputValue(" ")
    })
    
    const clearChat=(()=>{
        let i=JSON.parse(localStorage.getItem("chat"))
        i=[]
        localStorage.setItem('chat', JSON.stringify(i))
        window.location.reload();
    })
    return(
        <div className="chatGlobalStile">

            <div className="chatWindow">
                <h2>Chat window</h2>
                <div className="chat">
                {massageData.map((el, i)=>{
                    return(
                        <div className="chatMassages" key={i} >{el}</div>
                    )
                })}

                </div>
                
            </div>
            <div>

                <div className="chatInputGlobal">
                    <div style={{fontSize:"2rem"}}>
                        ваше имя "{userName.name}"
                    </div>
                    <div className="chatInputsGlobal">
                        <input className="chatInput" placeholder="Massage" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
                        <button className="chatInput" onClick={sendMasage}>отправить</button>
                        <button onClick={clearChat}>удалить сообщения</button>
                    </div>
                </div>
            </div>

        </div>
    )
})
export default Chat