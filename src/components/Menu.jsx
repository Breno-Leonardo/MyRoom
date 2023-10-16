import React, { useState } from "react";

import "../App.css";

import leftClick from "../assets/left-click.png";
import wheelClick from "../assets/wheel.png";

export function Menu(props) {
  const [value, setValue] = useState("day");

  return (
    <>
    <div className="menu">
      
      
      <div className="menuLine">
        <img className="menuIcon" src={leftClick}></img>
        <span>Segure para navegar </span>
      </div>
      
      <div className="menuLine">
        <img className="menuIcon" src={wheelClick}></img>
        <span>Zoom</span>
      </div>
      
    </div>


    <div className="toggleWrapper">
        <p>{props.timeOfDay.toUpperCase()}</p>
        <input
          value={value}
          onChange={props.onChange}
          type="checkbox"
          className="dn"
          id="dn"
        />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
    </>
    
    
  );
}
