import ModalForecast from "./ModalForecast"



//TODO cut down on forecast days and removed unused classes/IDs
const ModalContent = ({ river }) => {


let day1 = river.weather.forecastDay1;
let day2 = river.weather.forecastDay2;
let day3 = river.weather.forecastDay3;


  return (
    <div
      class="modal fade"
      id={river.modal}
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered container">
        <div class="modal-content">
          <div class="row" style={{ width: "1100px", marginLeft: "0" }}>
            <div class="modal-header">
              <h1 class="modal-title fs-5">
                {river.name} Weather
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* modal body */}
            <div
              class="card m-2 text-center col d-inline-block align-middle"
              style={{ width: "18rem" }}
            >
              {/* current day card */}
              <div class="card-body">
                <h5 class="card-title fw-bolder">Current</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bolder">
                  Precipitation: {river.weather.currentDay.precip} in
                </li>
                <li class="list-group-item fw-bolder">
                  Temperature: {Math.ceil(river.weather.currentDay.temp)}&#8457;
                </li>
                <li class="list-group-item fw-bolder">
                  Feels Like: {Math.ceil(river.weather.currentDay.feelsLike)}
                  &#8457;
                </li>
              </ul>
              <div class="card-body">
                <img src={river.weather.currentDay.icon}></img>
                <p class="fw-bold">
                  Condition: {river.weather.currentDay.condition}
                </p>
              </div>
            </div>
            {/* forecast cards */}
            <ModalForecast forecast={day1}/>
            <ModalForecast forecast={day2}/>
            <ModalForecast forecast={day3}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
