import React, { useState } from 'react';
import './AddRoute.css';
import axios from 'axios';

export default function AddRoute() {
  const [busNo, setBusNo] = useState("");
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");
  const [srcTime, setSrcTime] = useState("");
  const [dstTime, setDstTime] = useState("");
  const [fare, setFare] = useState("");  
  
  function handleSubmit(event) {
    event.preventDefault();
    if (isNaN(busNo)) {
      alert("Bus Number must be a number");
      setBusNo("");
      return;
    }
    if(isNaN(fare)){
      alert("Fare must be a number");
      setFare("");
      return;
    }
    if(source === dest){
      alert("Source and Destination Cannot be Same");
      return;
    }

    const formData = {
      BusNo: busNo,
      Source: source,
      Destination: dest,
      SrcTime: srcTime,
      dstTime: dstTime,
      Fare: fare
    };

    axios.post('http://localhost:8081/insert', formData)
      .then(response => {
        alert("Data Added Successfully!");
        setBusNo("");
        setSource("");
        setDest("");
        setSrcTime("");
        setDstTime("");
        setFare("");
      })
      .catch(error => {
        console.error('Error inserting data:', error);
      });
  }

  return (
    <div className='addroute_all'>
      <div className="addroute_container">

        <form className='form' onSubmit={handleSubmit}>
          <div >
            <label htmlFor='busNo'>Bus Number</label>
            <input required type='text' placeholder='Bus Number' value={busNo} onChange={e => setBusNo(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='source'>Source</label>
            <input required type='text' placeholder='Source' value={source} onChange={e => setSource(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='dest'>Destination</label>
            <input required type='text' placeholder='Destination' value={dest} onChange={e => setDest(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='srcTime'>Source Time</label>
            <input required type='time' value={srcTime} onChange={e => setSrcTime(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='dstTime'>Destination Time</label>
            <input required type='time' value={dstTime} onChange={e => setDstTime(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='fare'>Fare</label>
            <input placeholder='Fare' required type='text' value={fare} onChange={e => setFare(e.target.value)}></input>
          </div>
          <button type="submit">Add Route</button>
        </form>
      </div>
    </div>
  );
}
