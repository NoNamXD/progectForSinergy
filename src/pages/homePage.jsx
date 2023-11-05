

const HomePage =(()=>{
    let userData= JSON.parse(localStorage.getItem("registrationData"))
    if(!JSON.parse(localStorage.getItem("chat"))){
        localStorage.setItem('ch', JSON.stringify([]))
    }
  
    return (
     <div className="homePage">
        {userData && (<div>
            <div>приведствуем вас {userData.name}</div>
            <div>спасибо за регистрацию, приятного времяприпровождения на сайте,</div>
        </div> )}
        {!userData &&(<div>
            пожалуйсто пройдите регистрацию во вкладке аккаунт
        </div>)}

     </div>
    );
})
export default HomePage
