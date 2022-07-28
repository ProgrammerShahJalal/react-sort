import React, { useState, useEffect } from 'react';
import './App.css';

const patients = [
  {
    id: 1,
    name: 'Kamal Sarkar',
    selectedTime: "10:35 AM",
    date: "2022-07-30",
    age: 22,
  },
  {
    id: 2,
    name: 'Yeasin Rahman',
    selectedTime: "12:45 AM",
    date: "2022-07-28",
    age: 24,
  },
  {
    id: 3,
    name: 'Salman Farshi',
    selectedTime: "11:30 AM",
    date: "2022-07-12",
    age: 12
  },
];

function App() {
  const [data, setData] = useState([]);

  /* sort the data....biggest from smallest */
  useEffect(() => {
    const sorted = [...patients].sort((a, b) => a.age - a.age);
    setData(sorted);

  }, []);



  return (
    <div className="App">

      {data.map(patient => (
        <div key={patient.id} style={{ margin: '30px' }}>
          <div>{`Name: ${patient.name}`}</div>
          <div>{`Selected Time: ${patient.selectedTime}`}</div>
          <div>{`Date: ${patient.date}`}</div>
          <div>{`Age: ${patient.age}`}</div>
        </div>
      ))}
    </div>
  );
}

export default App;