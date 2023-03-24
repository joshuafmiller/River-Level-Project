const ModalForecast = ({forecast}) =>{


return(
<div
              class="card m-2 text-center col d-inline-block"
              style={{ width: "18rem" }}
            >
              <div class="card-body">
                <h5 class="card-title fw-bolder">
                  {forecast.date.substring(5, 11)}
                </h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bolder">
                  Precipitation Chance:{" "}
                  {forecast.precipChance}%
                </li>
                <li class="list-group-item fw-bolder">
                  Precipitation Total: {forecast.precipTotal}{" "}
                  in
                </li>
                <li class="list-group-item fw-bolder">
                  Temperature: {Math.ceil(forecast.tempMin)}
                  &#8457;-{Math.ceil(forecast.tempMax)}&#8457;
                </li>
              </ul>

              <div class="card-body">
                <img src={forecast.icon}></img>
                <p class="fw-bold">
                  Condition: {forecast.condition}
                </p>
              </div>
            </div>
)
}

export default ModalForecast;