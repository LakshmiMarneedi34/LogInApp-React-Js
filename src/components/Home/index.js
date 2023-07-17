// Write your code here
import {Component} from 'react'
import Message from '../Message'
import './index.css'
import LogIn from '../Login'
import LogOut from '../Logout'

class Home extends Component {
  state = {
    isLoggedIn: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="inner-app-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <LogIn login={this.onClickButton} />
          ) : (
            <LogOut logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
