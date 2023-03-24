const ModalContent = ({river}) => {

return(
        
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
);
}

export default ModalContent;