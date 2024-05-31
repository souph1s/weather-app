import React from "react";

const Weather = ({ weatherData }) => {
  console.log(weatherData);

  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return null;
  }

  const { main, weather, name } = weatherData;
  const weatherDescription = weather[0].description;

  return (
    <div className="text-white">
      {weatherData.weather ? (
        <div className="w-[500px] h-72 bg-[#8257E6] shadow-2xl rounded-xl m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {name}, {weatherData.sys.country}
                  </p>
                  <p className="text-sm">{weatherDescription}</p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()} ºC
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  className="w-28"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex-justify-between gap-x-8">
                    <p>Feels like</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} ºC
                    </p>
                  </div>

                  <div className="flex-justify-between gap-x-8">
                    <p>Humidity</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity} %
                    </p>
                  </div>

                  <div className="flex-justify-between gap-x-8">
                    <p>Wind speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} KPH
                    </p>
                  </div>

                  <div className="flex-justify-between gap-x-8">
                    <p>Pressure</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure} KPH
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
