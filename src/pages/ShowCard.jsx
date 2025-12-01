import { Card } from "../components/Card/Card"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './ShowCard.css'

export function ShowCard() {
  return (
    <div className="card-list">
      <Card link="https://react.dev" logo={reactLogo} title="React" linktext="React Docs" />
      <Card link="https://vite.dev" logo={viteLogo} title="Vite" linktext="Vite Docs" />
    </div>
  )
}