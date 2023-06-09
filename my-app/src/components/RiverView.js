import React from "react";
import ModalContent from "./ModalContent";
import classNames from "classnames";

const RiverCard = ({ river, button }) => {
  var runnableRiver =
    (river.runnable == "Runnable" && button == 3) ||
    (river.runnable == "Runnable" && button == 1);
  var lowRiver =
    (river.runnable == "Low" && button == 2) ||
    (river.runnable == "Low" && button == 1);
  var highRiver =
    (river.runnable == "High" && button == 4) ||
    (river.runnable == "High" && button == 1);

  var btnGroupClasses = classNames("list-group-item", "fw-bolder", {
    "text-success": runnableRiver,
    "text-danger": lowRiver,
    "text-primary": highRiver,
  });

  if (runnableRiver || lowRiver || highRiver) {
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
            Level: {river.level}
            {river.unit}
          </li>
          <li className={btnGroupClasses}>Status: {river.runnable}</li>
          <li class="list-group-item fw-bolder">
            Range: {river.runnableLevel[0]}-{river.runnableLevel[1]}
            {river.unit}
          </li>
        </ul>
        {/* make entire weather div a modal button */}
        <div
          type="button"
          data-bs-toggle="modal"
          data-bs-target={"#" + river.modal}
          class="card-body"
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">
            {Math.ceil(river.weather.currentDay.temp)}&#8457;
          </p>
          <ModalContent river={river} />
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
