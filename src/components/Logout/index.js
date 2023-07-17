// Write your code here
import './index.css'

const LogOut = props => {
  const {logout} = props

  return (
    <button className="logout-button" type="button" onClick={logout}>
      Logout
    </button>
  )
}

export default LogOut
