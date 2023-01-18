import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const api = {
    key: "a2405c56d6dda656bade64620b3673c5",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] =useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
       setWeather(result)
      });
  };

  return (
    <div className="App">
      <h1>Hava Durumu</h1>
      <input
        type="text"
        id="bar"
        placeholder="Şehir gir"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={searchPressed}>
        Search
      </button>
      <div className="content">
        <div className="city">{weather.name}</div>
        <div className="temp">{weather.main.temp}</div>
        <div className="temp">{weather.weather[0].main}</div>
      
      </div>
    </div>
  );
}

export default App;
