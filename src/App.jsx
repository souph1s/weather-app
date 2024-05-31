import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import { Search } from "lucide-react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "976c9acb7facf14332c48c0e362b712c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-screen relative bg-[#2f2f2f] flex flex-col items-center justify-center p-4">
      <img
        src={`/weather-icon.svg`}
        alt="Weather Icon"
        className="mx-auto mb-4"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="text-center mb-9 p-4 w-full max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            className="py-3 px-12 w-full text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 bg-white-600/100 shadow-md"
            placeholder="Enter your location..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDownCapture={searchLocation}
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
