import React from "react";
import weather from "./testweather.PNG";

const RiverCard = ({ river, button }) => {
  //checking to see if the river is runnable, high, or low and will build card
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
          data-bs-target="#exampleModal1"
          class="card-body "
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">{Math.ceil(river.weather.currentDay.temp)}F</p>

          {/* modal popout */}
          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {river.name}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">test</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
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
          data-bs-target="#exampleModal2"
          class="card-body "
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">{Math.ceil(river.weather.currentDay.temp)}F</p>

          {/* modal popout */}
          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {river.name}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
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
          data-bs-target="#exampleModal3"
          class="card-body "
        >
          <img type="button" src={river.weather.currentDay.icon}></img>
          <p class="fw-bold">{river.weather.currentDay.condition}</p>
          <p class="fw-bold">{Math.ceil(river.weather.currentDay.temp)}F</p>

          {/* modal popout */}
          <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {river.name}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
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
