import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Cabecera extends Component {
  manejaClick = () => {
    const { manejaClick, miau} = this.props
    manejaClick(miau)
  }
  render () {
      const {miau, manejaClick } = this.props
      return (
          <header className="App-header">
          <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
          <h1>{miau}</h1>
        </header>
      )
  }
}