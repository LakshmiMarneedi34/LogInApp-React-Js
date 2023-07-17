// Write your code here
import './index.css'

const LogIn = props => {
  const {login} = props

  return (
    <button type="button" className="login-button" onClick={login}>
      Login
    </button>
  )
}

export default LogIn
