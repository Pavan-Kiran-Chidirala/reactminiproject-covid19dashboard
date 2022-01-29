import './index.css'

const NotFound = props => {
  const goToHome = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dyhsyterg/image/upload/v1642513419/Group_7484error_oqzhvk.svg"
        alt="not-found-pic"
        className="not-found-image"
      />
      <h1 className="not-found-heading">PAGE NOT FOUND</h1>
      <p className="not-found-para">
        we are sorry, the page you requested could not be found
      </p>
      <button type="button" className="home-button" onClick={goToHome}>
        Home
      </button>
    </div>
  )
}

export default NotFound
