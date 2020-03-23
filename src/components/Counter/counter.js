import React, { Component } from "react"
import "./counter.css"

class Counter extends Component{
  constructor(props) {
    super()
    this.state = {
      number: props.value,
      max: props.max,
      min: props.min
    }

  }

  increase = () => {
    let newNum = this.state.number + 1;
    if (newNum >= this.state.max) {
      this.setState({
        number:this.state.max
      })
    }
    else (
      this.setState({
      number: newNum
    }))
  }
  decrease = () => {
    let newNum = this.state.number - 1;
    if (newNum <= this.state.min) {
      this.setState({
        number:this.state.min
      })
    }
    else(this.setState({
      number: newNum
    }))
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.increase} className="plus">+</button>
        <div className="number">{this.state.number}</div>
        <button onClick={this.decrease} className="minus">-</button>
      </div>
      
    )
  }
}

export default Counter
