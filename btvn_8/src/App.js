import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import "react-calendar/dist/Calendar.css";
import Clock from './component/Clock';

function App() {
  const [date, setDate] = useState(new Date())
  const onChange = date => {
    setDate(date)
  }
  return (
    <div className="App">
      <Clock />
      <h1>{date.toString().slice(0, 15)}</h1>
      <Calendar onChange={onChange} value={date} />
      {/* {console.log(date.toString().slice(0, 15))} */}
    </div>
  );
}

export default App;
