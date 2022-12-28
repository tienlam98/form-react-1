import React, { useState } from 'react'

export default function DriverController() {
    const [field, setField] = useState({
        name: "",
        surName: "",
        birth: "",
        height: ""
    })
     const handleSubmit = (event) => {
        console.log(event.target.name ,event.target.value)
        //phai co event.target.name để nó biết tên thuộc tính đang bị thay đổi
        setField(prev => ({
            //...prev de giu lai nhung thuoc tinh khac, khien no ko bi thay doi
            ...prev,
            [event.target.name] : event.target.value
            //phải để event.target.name trong [] để nó nhận dạng biến
        }))
     }
  return (
    <form style={{width: 200}}>
        <label htmlFor='name' >Họ tên</label>
        <input style={{width: 200}} id ="name" name = "name" placeholder='Họ và tên' onChange={handleSubmit}/>
        <label htmlFor='surName' >Chữ lót</label>
        <input style={{width: 200}} id = "surName" name = "surName" placeholder='Chữ lót' onChange={handleSubmit}/>
        <label htmlFor='birth' >Ngày tháng năm sinh</label>
        <input style={{width: 200}} id="birth" name = "birth" placeholder='Ngày tháng năm sinh' type={"date"} onChange={handleSubmit}/>
        <label htmlFor='height' >Chiều cao (cm)</label>
        <input style={{width: 200}} id = "height" name = "height" placeholder='Chiều cao' type={"number"} onChange={handleSubmit}/>
        <button type = 'submit'>Send</button>
        
    </form>
  )
}
