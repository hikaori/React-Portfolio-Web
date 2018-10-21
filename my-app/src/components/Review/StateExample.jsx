import React, { Component } from 'react'

export default class StateExample extends Component {
  state = {
    title: 'This is title',
    number: 0,
  }

  handleClick = () => {
    this.setState({
      title: 'This is Changed',
      number: this.state + 1,
    })
  }

  render(){
    const { title, number } = this.state;
    return(
      <div>
        <p>==== StateExample =====</p>
        <h1 onClick={this.handleClick}>{title}</h1>
        <p>{number}</p>
      </div>
    )
  }
}