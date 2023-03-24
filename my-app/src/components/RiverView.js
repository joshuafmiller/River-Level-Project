import React from "react";
import ModalContent from "./ModalContent";
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

{/* data here */}
        <ModalContent river={river}/>
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

          <ModalContent river={river}/>
                 
        </div>
        {/* end modal divs to copy */}
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
          <ModalContent river={river}/>
                 
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
