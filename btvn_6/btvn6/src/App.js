import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { useFormik } from "formik";

function App() {
  const [formInfo, setFormInfo] = useState({
    'userName':"",
    'phoneNumber': "",
    'adress': "",
    'email': "",
    'birth':""
  })

  const onHandleChange = (key, event) => {
    const value = event.target.value 
    setFormInfo({ ...formInfo,[key]:value})
}

  
  const { userName, phoneNumber, adress, email, birth } = formInfo
  
  const onClick = () => {
    if (!userName || !phoneNumber || !adress || !email || !birth) {
      alert('pls enter sth');
      return
    }
   alert(JSON.stringify(formInfo));
    
  }


  return (
    <div className="App">
      <h1>Thông tin cá nhân</h1>
      <form className="Form">
        <input
          placeholder="Họ và tên"
          value={userName}
          onChange={(e) => {
            onHandleChange("userName", e);
          }}
        />
        {/* <span>hello</span> */}
        <input
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChange={(e) => {
            onHandleChange("phoneNumber", e);
          }}
        />
        {/* <span>hello</span> */}
        <input
          placeholder="Địa chỉ"
          value={adress}
          onChange={(e) => {
            onHandleChange("adress", e);
          }}
        />
        {/* <span>hello</span> */}
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            onHandleChange("email", e);
          }}
        />
        {/* <span>hello</span> */}
        <input
          type='date'
          placeholder="dd/mm/yyyy"
          value={birth}
          onChange={(e) => {
            onHandleChange("birth", e);
          }}
        />
        {/* <span>hello</span> */}
        <button onClick={onClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
