import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import About from './components/AboutView';
import Contact from './components/ContactView';
import Footer from './components/Footer';
import RiverView from './components/RiverView';
import {useState, useEffect} from 'react';

function App() {



  let riverTables = [
    {
      name : "Big Laurel",
      ID : "03453000", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [250, 2000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1039/main",

    },
    {
      name : "Chattooga IV",
      ID : "02177000", //river id matching to api data
      level : null,
      unit : "ft", //unit of measurement for river level
      runnableLevel : [.90, 2.50], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/476/main",
    },
    {
      name : "Cheoah",
      ID : "0351706800", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [400, 2500], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/3146/main",
    },
    {
      name : "Falls Dam",
      ID : "02087183", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [650, 4000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/3869/main",
    },
    {
      name : "French Broad IX",
      ID : "03453500", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [700, 7000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1074/main",
    },
    {
      name : "Haw",
      ID : "02096960", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [1001, 12000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/2706/main",
    },
    {
      name : "Linville Gorge",
      ID : "02138500", //river id matching to api data
      level : null,
      unit : "ft", //unit of measurement for river level
      runnableLevel : [1.70, 2.70], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1039/main",
    },
    {
      name : "Nantahala",
      ID : "03505550", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [450, 2000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1109/main",
    },
    {
      name : "Nolichucky",
      ID : "03465500", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [500, 3000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1106/main",
    },
    {
      name : "Pigeon Gorge",
      ID : "03460795", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [300, 3000], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1108/main",
    },
    {
      name : "Tellico",
      ID : "03518500", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [280, 1500], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1791/main",
    },
    {
      name : "Watauga",
      ID : "03479000", //river id matching to api data
      level : null,
      unit : "cfs", //unit of measurement for river level
      runnableLevel : [150, 650], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1143/main",
    },
    {
      name : "Wilson Creek",
      ID : "02140510", //river id matching to api data
      level : null,
      unit : "ft", //unit of measurement for river level
      runnableLevel : [2.25, 5.00], //min, max
      runnable : null,
      awpage : "https://www.americanwhitewater.org/content/River/view/river-detail/1146/main",
    },

  ];



  fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03505550,03460795,02177000,0351706800,03453500,03465500,03479000,03453000,02087183,02096960,02140510,03518500,02138500&parameterCd=00060,00065')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    for (let i = 0; i < data.value.timeSeries.length; i++) { //looping through the json to pull out data per river(one for cfs and one for ft)
      console.log(data.value.timeSeries[i])
      console.log(data.value.timeSeries[i].variable.unit.unitCode)
      console.log(data.value.timeSeries[i].values[0].value[0].value)
      console.log(data.value.timeSeries[i].sourceInfo.siteCode[0].value)
      for(let j = 0; j <riverTables.length; j++){ //looping through riverTables array I created so i can check against json pulled and update the data
        if (data.value.timeSeries[i].sourceInfo.siteCode[0].value == riverTables[j].ID){ //checking to see if river ID is a match with the sitecode value
          console.log("It's a match!");
          console.log(data.value.timeSeries[i].sourceInfo.siteCode[0].value);
          console.log(riverTables[j].ID);
          // if riverTables wants cfs and the json pulled is using cfs update river level with number
          if(riverTables[j].unit == "cfs" && data.value.timeSeries[i].variable.unit.unitCode == "ft3/s"){
            riverTables[j].level = data.value.timeSeries[i].values[0].value[0].value;
            console.log(riverTables[j].level)  

          };
          // if riverTables wants ft and the json pulled is using ft update river level with number
          if(riverTables[j].unit == "ft" && data.value.timeSeries[i].variable.unit.unitCode == "ft"){
            riverTables[j].level = data.value.timeSeries[i].values[0].value[0].value;
            console.log(riverTables[j].level)
          };
          //checking to see if the river levels fall into the acceptable range or is low/high
          if (riverTables[j].level > riverTables[j].runnableLevel[0] && riverTables[j].level < riverTables[j].runnableLevel[1]){
            riverTables[j].runnable = "runnable"
            console.log(riverTables[j].runnable)
          };
          if (riverTables[j].level > riverTables[j].runnableLevel[1]){
            riverTables[j].runnable = "high"
            console.log(riverTables[j].runnable)
          };
          if (riverTables[j].level < riverTables[j].runnableLevel[0]){
            riverTables[j].runnable = "low"
            console.log(riverTables[j].runnable)
          };
      };


        
    
    }
  }
  
  })




  return (
    <div>
    <Navbar/>
      <Switch>
        <Route path = "/" exact>
          <Home />
          <RiverView data={riverTables}/>
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
