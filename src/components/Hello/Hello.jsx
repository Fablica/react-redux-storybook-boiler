import React, { Component } from "react"
import Button from "../Button/Button"

class Hello extends Component {
  render() {
    return (
      <div>
        Hello
        <Button
          text="Hello Component"
          onClick={() => console.log("demo app")}
        />
      </div>
    )
  }
}

export default Hello
