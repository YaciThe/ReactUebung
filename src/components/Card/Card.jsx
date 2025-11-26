
import reactLogo from '../../assets/react.svg'
import './Card.css'

// ein punkt importiert aus demselben ordner, zwei punkt aus einem überordner

export function Card ({title,logo,link,linktext}) {
    return (
        <div className= "Cardbox">
            
            <h1>{title}</h1>
     

        
            <img className="image" src={logo} />

            <a href={link}> {linktext}</a>

        </div>

    )
}

// title logo link sind props, pro datei kann es nur einen export geben, alle props können in eine funktion
