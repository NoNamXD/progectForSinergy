
import { useState } from "react"
import { useEffect } from "react"
import "./pagesStiles.css"
const Acount =(()=>{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [savedData, setSavedData] = useState(null)

  useEffect(() => {
    const savedDataString = localStorage.getItem('registrationData')
    if (savedDataString) {
      const parsedData = JSON.parse(savedDataString)
      setSavedData(parsedData)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const registrationData = { name, email, password,}

    localStorage.setItem('registrationData', JSON.stringify(registrationData))

    setSavedData(registrationData)
   

  }
  const deleteAc=(()=>{
    localStorage.clear('registrationData')
  })

  return (
    <div className="acountGlobalStile"> 
      {!savedData && (

        <form onSubmit={handleSubmit} className="acountRegisterForm">
          <div><div>Имя</div><input type="text" value={name} onChange={(e) => setName(e.target.value)} className="acountInput" /></div>
          <div><div>Email</div><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="acountInput"/> </div>
          <div><div>Пароль</div><input value={password} onChange={(e) => setPassword(e.target.value)} className="acountInput"/> </div>
          <button type="submit" className="acountButton">Зарегистрироваться</button>
      </form>
      )}

      {savedData && (
        <form onSubmit={deleteAc} className="acountData">  
          <div>Сохраненные данные:</div>
          <div>Имя: {savedData.name}</div>
          <div>Email: {savedData.email}</div>
          <div>Пароль: {savedData.password}</div>
          <div>
          <button type="submit">удалить акаунт</button>
          <h6>при удалении акаунта все ваши сообщения будут автоматически удаленны</h6>
          </div>
        </form>
      )}
    </div>
);
      })
export default Acount   