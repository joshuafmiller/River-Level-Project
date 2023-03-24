import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutView";
import Contact from "./components/ContactView";
import Footer from "./components/Footer";
import RiverView from "./components/RiverView";
import FilterView from "./components/FilterView";
import { useState } from "react";
import RiverData from "./data/RiverData.json";

function App() {
  //creating variables used in state
  let riverMaster = RiverData;
  let filterValue = 1;

  //setting state for the river data
  const [riverTables, setData] = useState(riverMaster);
  //setting state to be used for the upcoming weather API call
  const [weatherTables, setTable] = useState(riverTables);
  //state used for the filter view button clicks
  let [buttonPressed, setButton] = useState(filterValue);
  //setting state, will change to false once all data has been loopped through
  //this is used to show a loading screen during this time
  const [isLoading, setLoading] = useState(true);

  //on button click function to use for filters
  function ChangeButton(value) {
    buttonPressed = value;
    console.log(buttonPressed);
    setButton(buttonPressed);
  }

  //fetching usgs data
  useEffect(() => {
    fetch(
      "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03505550,03460795,02177000,0351706800,03453500,03465500,03479000,03453000,02087183,02096960,02140510,03518500,02138500,03512000&parameterCd=00060,00065"
    )
      .then((response) => response.json())
      .then((data) => {
        //looping through the json to pull out data per river(one for cfs and one for ft)
        for (let i = 0; i < data.value.timeSeries.length; i++) {
          //looping through riverTables json I created so i can check against json pulled and update the data
          for (let j = 0; j < riverTables.length; j++) {
            //checking to see if river ID is a match with the sitecode value
            if (
              data.value.timeSeries[i].sourceInfo.siteCode[0].value ==
              riverTables[j].ID
            ) {
              // if riverTables wants cfs and the json pulled is using cfs update river level with number and lat/lon over river
              if (
                riverTables[j].unit == "cfs" &&
                data.value.timeSeries[i].variable.unit.unitCode == "ft3/s"
              ) {
                riverTables[j].level =
                  data.value.timeSeries[i].values[0].value[0].value;

                riverTables[j].weather.lon =
                  data.value.timeSeries[
                    i
                  ].sourceInfo.geoLocation.geogLocation.longitude;

                riverTables[j].weather.lat =
                  data.value.timeSeries[
                    i
                  ].sourceInfo.geoLocation.geogLocation.latitude;

                //updating the state causes the page to re-render
                //not ideal but it works
                const newRiver = [...riverTables];
                setData(newRiver);
              }
              // if riverTables wants ft and the json pulled is using ft update river level with number and lat/lon of river
              if (
                riverTables[j].unit == "ft" &&
                data.value.timeSeries[i].variable.unit.unitCode == "ft"
              ) {
                riverTables[j].level =
                  data.value.timeSeries[i].values[0].value[0].value;

                riverTables[j].weather.lon =
                  data.value.timeSeries[
                    i
                  ].sourceInfo.geoLocation.geogLocation.longitude;

                riverTables[j].weather.lat =
                  data.value.timeSeries[
                    i
                  ].sourceInfo.geoLocation.geogLocation.latitude;
              }
              //checking to see if the river levels fall into the acceptable range or is low/high
              if (
                riverTables[j].level >= riverTables[j].runnableLevel[0] &&
                riverTables[j].level <= riverTables[j].runnableLevel[1]
              ) {
                riverTables[j].runnable = "Runnable";
              }
              if (riverTables[j].level > riverTables[j].runnableLevel[1]) {
                riverTables[j].runnable = "High";
              }
              if (riverTables[j].level < riverTables[j].runnableLevel[0]) {
                riverTables[j].runnable = "Low";
              }
            }
          }
        }
      });
  }, []);

  //fetching weather data
  useEffect(() => {
    //looping through the master river list to make api request with lat/lon of each
    for (let i = 0; i < weatherTables.length; i++) {
      let item = weatherTables[i];
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=02ff44908fa541bb9ba214658232203 &q=${item.weather.lat},${item.weather.lon}&days=3&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          const newItem = [...weatherTables];
          setTable(newItem);
          //updating current day values
          item.weather.currentDay.condition = data.current.condition.text;
          item.weather.currentDay.temp = data.current.temp_f;
          item.weather.currentDay.icon = data.current.condition.icon;
          item.weather.currentDay.precip = data.current.precip_in;
          item.weather.currentDay.feelsLike = data.current.feelslike_f;

          //updating day1 values
          item.weather.forecastDay1.date = data.forecast.forecastday[0].date;
          item.weather.forecastDay1.tempMin =
            data.forecast.forecastday[0].day.mintemp_f;
          item.weather.forecastDay1.tempMax =
            data.forecast.forecastday[0].day.maxtemp_f;
          item.weather.forecastDay1.condition =
            data.forecast.forecastday[0].day.condition.text;
          item.weather.forecastDay1.icon =
            data.forecast.forecastday[0].day.condition.icon;
          item.weather.forecastDay1.precipTotal =
            data.forecast.forecastday[0].day.totalprecip_in;
          item.weather.forecastDay1.precipChance =
            data.forecast.forecastday[0].day.daily_chance_of_rain;

          //updating day2 values
          item.weather.forecastDay2.date = data.forecast.forecastday[1].date;
          item.weather.forecastDay2.tempMin =
            data.forecast.forecastday[1].day.mintemp_f;
          item.weather.forecastDay2.tempMax =
            data.forecast.forecastday[1].day.maxtemp_f;
          item.weather.forecastDay2.condition =
            data.forecast.forecastday[1].day.condition.text;
          item.weather.forecastDay2.icon =
            data.forecast.forecastday[1].day.condition.icon;
          item.weather.forecastDay2.precipTotal =
            data.forecast.forecastday[1].day.totalprecip_in;
          item.weather.forecastDay2.precipChance =
            data.forecast.forecastday[1].day.daily_chance_of_rain;

          //updating day3 values
          item.weather.forecastDay3.date = data.forecast.forecastday[2].date;
          item.weather.forecastDay3.tempMin =
            data.forecast.forecastday[2].day.mintemp_f;
          item.weather.forecastDay3.tempMax =
            data.forecast.forecastday[2].day.maxtemp_f;
          item.weather.forecastDay3.condition =
            data.forecast.forecastday[2].day.condition.text;
          item.weather.forecastDay3.icon =
            data.forecast.forecastday[2].day.condition.icon;
          item.weather.forecastDay3.precipTotal =
            data.forecast.forecastday[2].day.totalprecip_in;
          item.weather.forecastDay3.precipChance =
            data.forecast.forecastday[2].day.daily_chance_of_rain;

          //checking to see when all API calls for weather are complete and set the state to false to remove the loading screen on the final API call
          let num = i;

          if (num == weatherTables.length - 1) {
            setLoading(false);
          }
        });
    }
  }, [riverTables]);

  //loading page while looping through the weather API calls
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Loading the data {console.log("loading state")}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/River-Level-Project" exact>
          <Home />
          <FilterView button={ChangeButton} />
          <RiverView data={riverTables} button={buttonPressed} />
        </Route>
        <Route path="/River-Level-Project/about">
          <About />
        </Route>
        <Route path="/River-Level-Project/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
