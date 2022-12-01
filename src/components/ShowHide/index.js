import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstNameCard: false,
    lastNameCard: false,
  }

  getFirstName = () => {
    this.setState(prevState => ({firstNameCard: !prevState.firstNameCard}))
  }

  getSecondName = () => {
    this.setState(prevState => ({lastNameCard: !prevState.lastNameCard}))
  }

  render() {
    const {firstNameCard, lastNameCard} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              onClick={this.getFirstName}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstNameCard ? <p className="name-card">Joe</p> : ''}
          </div>
          <div className="name-container">
            <button
              className="show-hide-button"
              onClick={this.getSecondName}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastNameCard ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
