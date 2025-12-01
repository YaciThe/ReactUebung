import React from "react";
import { Rooms } from "../components/Smarthome/Rooms.jsx";
import living from "../assets/living.png";
import bed from "../assets/bed.png";
import kitchen from "../assets/kitchen.png";
import './ShowSmarthome.css'

export function ShowSmarthome() {
  return (
    <div className="smarthome-list">
      <Rooms roomname="Living Room" icon={living} temperature="25" lightstatus="On" />

      <Rooms roomname="Bedroom" icon={bed} temperature="18" lightstatus="Off" />

      <Rooms roomname="Kitchen" icon={kitchen} temperature="20" lightstatus="On" />
    </div>
  );
}