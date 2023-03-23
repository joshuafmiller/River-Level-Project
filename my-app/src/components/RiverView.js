import React from "react";
import weather from "./testweather.PNG"



const RiverCard = ({ river, button }) => {
//checking to see if the river is runnable, high, or low

    if ((river.runnable == "runnable" && button==3) || (river.runnable == "runnable" && button==1)){
    return (
      
    <div class="card m-2 text-center runnable" style={{ width: "18rem", }}>
      <a class="card-body text-decoration-none"href={river.awpage}>
      <div class="card-body">
        <h5 class="card-title fw-bolder">{river.name}</h5>
        <p class="card-text"></p>
      </div>
      </a>
      <ul class="list-group list-group-flush">
        <li class="list-group-item fw-bolder">
          {river.level}
          {river.unit}
        </li>
        <li class="list-group-item text-success fw-bolder">{river.runnable}</li>
        <li class="list-group-item fw-bolder">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
      </ul>
      <div class="card-body">
        {/* <a href={river.awpage} class="card-link">
          American Whitewater Page
        </a> */}

        {/*get weather data and when you click on the icon it will display full weather data */}
      
        <img src={river.weather.currentDay.icon}></img>
        <p class="fw-bold">{river.weather.currentDay.condition}</p>
        <p class="fw-bold">{river.weather.currentDay.temp}F</p>
        
      </div>
    </div>
  );
    }
    if ((river.runnable == "high" && button==4) || (river.runnable == "high" && button==1)){
        return (
        
            <div class="card m-2 text-center high" style={{ width: "18rem" }}>
      <a class="card-body text-decoration-none"href={river.awpage}>
      <div class="card-body">
        <h5 class="card-title fw-bolder">{river.name}</h5>
        <p class="card-text"></p>
      </div>
      </a>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bolder">
                  {river.level}
                  {river.unit}
                </li>
                <li class="list-group-item text-danger fw-bolder">{river.runnable}</li>
                <li class="list-group-item fw-bolder">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
              </ul>
              <div class="card-body">
              <img src={river.weather.currentDay.icon}></img>
              <p class="fw-bold">{river.weather.currentDay.condition}</p>
              <p class="fw-bold">{river.weather.currentDay.temp}F</p>
              </div>
            </div>
          );
    }

    if ((river.runnable == "low" && button==2)||(river.runnable == "low" && button==1)){
        return (
        
            <div class="card m-2 text-center low" style={{ width: "18rem" }}>
      <a class="card-body text-decoration-none"href={river.awpage}>
      <div class="card-body">
        <h5 class="card-title fw-bolder">{river.name}</h5>
        <p class="card-text"></p>
      </div>
      </a>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bolder">
                  {river.level}
                  {river.unit}
                </li>
                <li class="list-group-item text-danger fw-bolder">{river.runnable}</li>
                <li class="list-group-item fw-bolder">{river.runnableLevel[0]}-{river.runnableLevel[1]}{river.unit}</li>
              </ul>
              <div class="card-body">
              <img src={river.weather.currentDay.icon}></img>
              <p class="fw-bold">{river.weather.currentDay.condition}</p>
              <p class="fw-bold">{river.weather.currentDay.temp}F</p>
              </div>
            </div>
          );
    }


    };


const RiverView = ({ data, button }) => {
  const cardData = data.map((obj, i) => {
    return <RiverCard river={obj} key={i} button={button} />;
  });
  return (
    <div>
      {cardData && (
        <div className="container">
          <div className="row">{cardData}</div>
        </div>
      )}
    </div>
  );
};

export default RiverView;