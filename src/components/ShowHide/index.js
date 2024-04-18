// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onChangeOne = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onChangeTwo = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bgContainer">
        <h1 className="mainHeading">Show/Hide</h1>
        <div className="cardContainer">
          <div className="nameCard">
            <button type="button" className="button" onClick={this.onChangeOne}>
              Show/Hide Firstname
            </button>
            {firstName ? <p className="nameContainer">Joe</p> : null}
          </div>
          <div className="nameCard">
            <button type="button" className="button" onClick={this.onChangeTwo}>
              Show/Hide Lastname
            </button>
            {lastName ? <p className="nameContainer">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
