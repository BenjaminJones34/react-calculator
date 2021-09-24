import "./App.css"
import { useState } from "react"
const math = require("mathjs")

const App = () => {
  const [display, setDisplay] = useState("")

  const Number = (props) => {
    return (
      <button className={isNaN(props.number) ? "oddButton" : "button"} onClick={() => {setDisplay(display + props.number)}}>{props.number}</button>
    )  
  }

  return (
    <div className="main">
      <p className="text">{display}</p>
      <Number number="7" />
      <Number number="8" />
      <Number number="9" />
      <Number number="4" />
      <Number number="5" />
      <Number number="6" />
      <Number number="1" />
      <Number number="2" />
      <Number number="3" />
      <Number number="0" />
      <button className="button" onClick={() => {setDisplay("")}}>clear</button>
      <button className="button" onClick={() => {setDisplay(math.evaluate(display).toString())}}>=</button>
      <Number number="." />
      <Number number="+" />
      <Number number="-" />
      <Number number="*" />
      <Number number="/" />
    </div>
  )
}

export default App