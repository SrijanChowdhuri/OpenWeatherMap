import React, { useState } from "react";
import axios from "axios";
import './index.css';
function App() {
  
  const[data,setData] = useState({});
  const[location,setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0a4a41f6946715b38ccbd4dbdd911154&units=metric`;
  
  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        //console.log(response.data)
      })
      setLocation('')
    }
  }


  return (
    <div className="app">
      <div className="search">
        <input type = "text"
          value={location}
          onKeyPress={searchLocation}
          onChange={event => setLocation(event.target.value)}
          placeholder = 'Enter Location'
        />
      </div>
      <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
              {data.main? <h1>{data.main.temp}°C</h1> : null}
              
            </div>
            <div className="description">
              {data.weather? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main? <p className="bold">{data.main.feels_like}°C</p> :null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind? <p className="bold">{data.wind.speed}KMPH</p>: null}
              
              <p>Wind Speed</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
