import React from "react";
import { useState, setState } from "react";

const RiverCard = ({ river, button}) => {


  if (
    (river.runnable == "runnable" && button == 3) ||
    (river.runnable == "runnable" && button == 1)
  ) {
    
    return (
      <div class="card m-2 text-center runnable" style={{ width: "18rem" }}>
        <a class="card-body text-decoration-none" href={river.awpage}>
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
          <li class="list-group-item text-success fw-bolder">
            {river.runnable}
          </li>
          <li class="list-group-item fw-bolder">
            {river.runnableLevel[0]}-{river.runnableLevel[1]}
            {river.unit}
          </li>
        </ul>
        

        {/* make entire weather div a modal button */}
        <div
          type="button"
          data-bs-toggle="modal"
          data-bs-target= {"#"+river.modal}
          class="card-body"
          id="runnable"
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">{Math.ceil(river.weather.currentDay.temp)}F</p>

          {/* modal popout */}
          <div
            class="modal fade"
            id= {river.modal}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {river.name} Weather:
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                {/* modal body */}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">Current:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation: {river.weather.currentDay.precip} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.currentDay.temp)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">Condition: {river.weather.currentDay.condition}</p>
          </div>
                </div>
                        {/* day 1 forecast */}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay1.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay1.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay1.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay1.tempMin)}F-{Math.ceil(river.weather.forecastDay1.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay1.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay1.condition}</p>

          </div>
                </div>
                {/* day 2 forecast */}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay2.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay2.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay2.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay2.tempMin)}F-{Math.ceil(river.weather.forecastDay2.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay2.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay2.condition}</p>

          </div>
                </div>
                {/* day 3  forecast*/}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay3.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay3.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay3.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay3.tempMin)}F-{Math.ceil(river.weather.forecastDay3.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay3.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay3.condition}</p>

          </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
        {/* end modal divs to copy */}
      </div>

     
    );

  }
  if (
    (river.runnable == "high" && button == 4) ||
    (river.runnable == "high" && button == 1)
  ) {
    return (
      <div class="card m-2 text-center high" style={{ width: "18rem" }}>
        <a class="card-body text-decoration-none" href={river.awpage}>
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
          <li class="list-group-item text-danger fw-bolder">
            {river.runnable}
          </li>
          <li class="list-group-item fw-bolder">
            {river.runnableLevel[0]}-{river.runnableLevel[1]}
            {river.unit}
          </li>
        </ul>
        <div
          type="button"
          data-bs-toggle="modal"
          data-bs-target= {"#"+river.modal}
          class="card-body "
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">{Math.ceil(river.weather.currentDay.temp)}F</p>

          {/* modal popout */}
          <div
            class="modal fade"
            id={river.modal}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {river.name} Weather:
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  </div>
                                <div class="card m-2 text-center runnable" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">Current:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation: {river.weather.currentDay.precip} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.currentDay.temp)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">Condition: {river.weather.currentDay.condition}</p>

          </div>
                </div>
                {/* copy here */}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay1.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay1.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay1.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay1.tempMin)}F-{Math.ceil(river.weather.forecastDay1.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay1.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay1.condition}</p>

          </div>
                </div>
                {/* day 2 forecast */}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay2.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay2.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay2.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay2.tempMin)}F-{Math.ceil(river.weather.forecastDay2.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay2.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay2.condition}</p>

          </div>
                </div>
                {/* day 3  forecast*/}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay3.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay3.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay3.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay3.tempMin)}F-{Math.ceil(river.weather.forecastDay3.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay3.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay3.condition}</p>

          </div>
                
                
              </div>
            
          </div>
        </div>
        {/* end modal divs to copy */}
      </div>
      </div>
      </div>
    );
  }

  if (
    (river.runnable == "low" && button == 2) ||
    (river.runnable == "low" && button == 1)
  ) {
    return (
      <div class="card m-2 text-center low" style={{ width: "18rem" }}>
        <a class="card-body text-decoration-none" href={river.awpage}>
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
          <li class="list-group-item text-danger fw-bolder">
            {river.runnable}
          </li>
          <li class="list-group-item fw-bolder">
            {river.runnableLevel[0]}-{river.runnableLevel[1]}
            {river.unit}
          </li>
        </ul>
                <div
          type="button"
          data-bs-toggle="modal"
          data-bs-target= {"#"+river.modal}
          class="card-body "
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">{Math.ceil(river.weather.currentDay.temp)}F</p>

          {/* modal popout */}
          <div
            class="modal fade"
            id= {river.modal}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {river.name} Weather:
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="card m-2 text-center runnable" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">Current:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation: {river.weather.currentDay.precip} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.currentDay.temp)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">Condition: {river.weather.currentDay.condition}</p>

          </div>
          
                </div>
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay1.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay1.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay1.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay1.tempMin)}F-{Math.ceil(river.weather.forecastDay1.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay1.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay1.condition}</p>

          </div>
                </div>
                {/* day 2 forecast */}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay2.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay2.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay2.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay2.tempMin)}F-{Math.ceil(river.weather.forecastDay2.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay2.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay2.condition}</p>

          </div>
                </div>
                {/* day 3  forecast*/}
                <div class="card m-2 text-center" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bolder">{river.weather.forecastDay3.date}:</h5>
            <p class="card-text"></p>
          </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bolder">
          Precipitation Chance: {river.weather.forecastDay3.precipChance}%
          </li>
          <li class="list-group-item fw-bolder">
          Precipitation Total: {river.weather.forecastDay3.precipTotal} in
          </li>
          <li class="list-group-item fw-bolder">
          Temperature: {Math.ceil(river.weather.forecastDay3.tempMin)}F-{Math.ceil(river.weather.forecastDay3.tempMax)}F
          </li>
        </ul>
        <div
          class="card-body"
          id="runnable"
        >
          <img src={river.weather.forecastDay3.icon}></img>
          <p class="fw-bold">Condition: {river.weather.forecastDay3.condition}</p>

          </div>
          </div>
              </div>
            </div>
          </div>
        </div>
        {/* end modal divs to copy */}
      </div>

    );
  }
};

const RiverView = ({ data, button}) => {

      
  const cardData = data.map((obj, i) => {  

    return <RiverCard river={obj} key={i} button={button}/>;
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
