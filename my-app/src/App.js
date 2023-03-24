import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, renderMatches } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import About from "./components/AboutView";
import Contact from "./components/ContactView";
import Footer from "./components/Footer";
import RiverView from "./components/RiverView";
import FilterView from "./components/FilterView";
import { useState, setState } from "react";


function App() {

//master river list
  let riverMaster = [
    {
      name: "Big Laurel",
      ID: "03453000",
      modal: "BigLaurel", //river id matching to api data
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [250, 2000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1039/main",
      weather : {
        lat: null,
        lon: null,
        currentDay: {
          temp: null,
          condition : null,
          icon : null,
          precip : null,
        },
        forecastDay1:{
          date: null,
          tempMin: null,
          tempMax: null,
          condition : null,
          icon : null,
          precipTotal : null,
          precipChance : null,
        },
        forecastDay2:{
          date: null,
          tempMin: null,
          tempMax: null,
          condition : null,
          icon : null,
          precipTotal : null,
          precipChance : null,

        },
        forecastDay3:{
          date: null,
          tempMin: null,
          tempMax: null,
          condition : null,
          icon : null,
          precipTotal : null,
          precipChance : null,
        },
      },
    },
    {
      name: "Big Creek Lower",
      ID: "03512000",
      modal: "BigCreekLower", //river id matching to api data
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [1200, 2700], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1038/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Chattooga III",
      ID: "02177000",
      modal: "ChattoogaIII", //river id matching to api data
      level: null,
      unit: "ft", //unit of measurement for river level
      runnableLevel: [1.20, 3.00], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/475/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Chattooga IV",
      ID: "02177000",
      modal: "ChattoogaIV", //river id matching to api data
      level: null,
      unit: "ft", //unit of measurement for river level
      runnableLevel: [0.9, 2.5], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/476/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Cheoah",
      ID: "0351706800",
      modal: "Cheoah", //river id matching to api data
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [400, 2500], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/3146/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Falls Dam",
      ID: "02087183",
      modal: "FallsDam", //river id matching to api data
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [650, 4000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/3869/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "French Broad IX",
      ID: "03453500", //river id matching to api data
      modal: "FrenchBroadIX",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [700, 7000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1074/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Haw",
      ID: "02096960", //river id matching to api data
      modal: "Haw",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [1001, 12000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/2706/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Linville Gorge",
      ID: "02138500",
      modal: "LinvilleGorge", //river id matching to api data
      level: null,
      unit: "ft", //unit of measurement for river level
      runnableLevel: [1.7, 2.7], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1039/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Nantahala",
      ID: "03505550", //river id matching to api data
      modal: "Nantahala",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [450, 2000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1109/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Nolichucky",
      ID: "03465500", //river id matching to api data
      modal: "Nolichucky",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [500, 3000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1106/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Pigeon Gorge",
      ID: "03460795", //river id matching to api data
      modal: "PigeonGorge",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [300, 3000], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1108/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Tellico",
      ID: "03518500", //river id matching to api data
      modal: "Tellico",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [280, 1500], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1791/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Tellico Middle",
      ID: "03518500", //river id matching to api data
      modal: "TellicoMiddle",
      level: null,
      unit: "ft", //unit of measurement for river level
      runnableLevel: [1.40, 4.00], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1791/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Watauga",
      ID: "03479000", //river id matching to api data
      modal : "Watauga",
      level: null,
      unit: "cfs", //unit of measurement for river level
      runnableLevel: [150, 650], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1143/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
    },
    {
      name: "Wilson Creek",
      ID: "02140510", //river id matching to api data
      modal : "WilsonCreek",
      level: null,
      unit: "ft", //unit of measurement for river level
      runnableLevel: [2.25, 5.0], //min, max
      runnable: null,
      awpage:
        "https://www.americanwhitewater.org/content/River/view/river-detail/1146/main",
        weather : {
          lat: null,
          lon: null,
          currentDay: {
            temp: null,
            condition : null,
            icon : null,
            precip : null,
          },
          forecastDay1:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
          forecastDay2:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,

          },
          forecastDay3:{
            date: null,
            tempMin: null,
            tempMax: null,
            condition : null,
            icon : null,
            precipTotal : null,
            precipChance : null,
          },
        },
        
    },
  ];

  const [riverTables, setData] = useState(riverMaster);

//fetching usgs data
useEffect(() => {
  fetch(
    "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03505550,03460795,02177000,0351706800,03453500,03465500,03479000,03453000,02087183,02096960,02140510,03518500,02138500,03512000&parameterCd=00060,00065"
  )
    .then((response) => response.json())
    .then((data) => {
      //looping through the json to pull out data per river(one for cfs and one for ft)
      for (let i = 0; i < data.value.timeSeries.length; i++) {
        //looping through riverTables array I created so i can check against json pulled and update the data
        
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

                riverTables[j].weather.lon = data.value.timeSeries[i].sourceInfo.geoLocation.geogLocation.longitude;

                riverTables[j].weather.lat = data.value.timeSeries[i].sourceInfo.geoLocation.geogLocation.latitude;
  
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

              riverTables[j].weather.lon = data.value.timeSeries[i].sourceInfo.geoLocation.geogLocation.longitude;
           
              riverTables[j].weather.lat = data.value.timeSeries[i].sourceInfo.geoLocation.geogLocation.latitude;

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
  },[]);

  const [weatherTables, setTable] = useState(riverTables);




  const [isLoading, setLoading] = useState(true);










//fetching weather data
useEffect(() =>{
  
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
      item.weather.currentDay.temp = (data.current.temp_f);
      item.weather.currentDay.icon = data.current.condition.icon;
      item.weather.currentDay.precip = data.current.precip_in;

      

      //updating day1 values
      item.weather.forecastDay1.date = data.forecast.forecastday[0].date
      item.weather.forecastDay1.tempMin = data.forecast.forecastday[0].day.mintemp_f
      item.weather.forecastDay1.tempMax = data.forecast.forecastday[0].day.maxtemp_f
      item.weather.forecastDay1.condition = data.forecast.forecastday[0].day.condition.text
      item.weather.forecastDay1.icon = data.forecast.forecastday[0].day.condition.icon
      item.weather.forecastDay1.precipTotal = data.forecast.forecastday[0].day.totalprecip_in
      item.weather.forecastDay1.precipChance = data.forecast.forecastday[0].day.daily_chance_of_rain

      //updating day2 values
      item.weather.forecastDay2.date = data.forecast.forecastday[1].date
      item.weather.forecastDay2.tempMin = data.forecast.forecastday[1].day.mintemp_f
      item.weather.forecastDay2.tempMax = data.forecast.forecastday[1].day.maxtemp_f
      item.weather.forecastDay2.condition = data.forecast.forecastday[1].day.condition.text
      item.weather.forecastDay2.icon = data.forecast.forecastday[1].day.condition.icon
      item.weather.forecastDay2.precipTotal = data.forecast.forecastday[1].day.totalprecip_in
      item.weather.forecastDay2.precipChance = data.forecast.forecastday[1].day.daily_chance_of_rain

      //updating day3 values
      item.weather.forecastDay3.date = data.forecast.forecastday[2].date
      item.weather.forecastDay3.tempMin = data.forecast.forecastday[2].day.mintemp_f
      item.weather.forecastDay3.tempMax = data.forecast.forecastday[2].day.maxtemp_f
      item.weather.forecastDay3.condition = data.forecast.forecastday[2].day.condition.text
      item.weather.forecastDay3.icon = data.forecast.forecastday[2].day.condition.icon
      item.weather.forecastDay3.precipTotal = data.forecast.forecastday[2].day.totalprecip_in
      item.weather.forecastDay3.precipChance = data.forecast.forecastday[2].day.daily_chance_of_rain
      console.log(item)

      let num = i
      console.log(num)

      if (num == weatherTables.length-1) {
        setLoading(false)
      }
      

    })
  };
},[riverTables],);



//on button click to use for filters
  let filterValue = 1;

  let [buttonPressed, setButton]= useState(filterValue)

   function ChangeButton(value){
        buttonPressed = value
        console.log(buttonPressed)
        setButton(buttonPressed)
    };


  // let modalNumber = 1;
  // let [modalNext, setModal] = useState(modalNumber)  

  //   function ModalChange(value){
  //     modalNext = value + 1

  //    document.getElementById("exampleModal1").id = `exampleModal${modalNext}`

  //     setModal(modalNext)
  //   }
  
    if (isLoading) {
      return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the data {console.log("loading state")}</div>
    );
    }
// stuff
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/River-Level-Project" exact>
            <Home />
            <FilterView button={ChangeButton}/>
            <RiverView data={riverTables} button={buttonPressed}/>
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
