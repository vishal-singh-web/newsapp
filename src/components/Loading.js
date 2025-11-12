import React, { Component } from 'react'
import loader from './Spinning.gif'
export default class Loading extends Component {
  render() {
    return (
        <div className="text-center my-3">
            <img src={loader} alt="loading..."></img>
        </div>
    )
  }
}
