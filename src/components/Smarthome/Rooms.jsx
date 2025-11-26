import './Rooms.css'

export function Rooms ({roomname,icon,temperature,lightstatus}) {
    return ( <div className="Roombox">

        <h2>{roomname}</h2>

        <img src={icon} />
        <p>Temperature: {temperature}°C</p>
        <p>Light Status: {lightstatus}</p>

    </div>
    )
}