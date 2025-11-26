import "./Destination.css"
import { useState } from "react";

export function Destination () {
    const [destination, setDestination] = useState(null);


     return (
    <div className="destination">
      <h2>Wo möchtest du Urlaub machen?</h2>
    

        <div className="optiontext">
      <p
        className={`option ${destination === "strand" ? "active" : ""}`}
        onClick={() => setDestination("strand")}
      >
        Strand
      </p>

      <p
        className={`option ${destination === "berge" ? "active" : ""}`}
        onClick={() => setDestination("berge")}
      >
        Berge
      </p>
      </div>

      <div className="image-container">
        {destination === "strand" ? (
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Strand"
          />
        ) : destination === "berge" ? (
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Berge"
          />
        ) : (
          <p>Bitte wähle ein Urlaubsziel aus.</p>
        )}
      </div>
    </div>
  );
}