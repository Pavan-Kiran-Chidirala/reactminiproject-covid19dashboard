import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () =>
    this.setState(prevState => ({showMenu: !prevState.showMenu}))

  closeMenu = () => this.setState({showMenu: false})

  render() {
    const {showMenu} = this.state
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name highlight' : 'link-name'
    const aboutClassName =
      path === '/about' ? 'link-name highlight' : 'link-name'
    return (
      <>
        <div className="header-list">
          <Link to="/" className="link-logo">
            <h1 className="app-name">
              COVID19<span className="blue-text">INDIA</span>
            </h1>
          </Link>
          <ul className="nav-list">
            <Link className="link-logo" to="/">
              <li className={homeClassName}>Home</li>
            </Link>
            <Link className="link-logo" to="/about">
              <li className={aboutClassName}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="menu-button"
            onClick={this.toggleMenu}
          >
            <img
              src="https://res.cloudinary.com/dyhsyterg/image/upload/v1643368210/add-to-queue_1_lrcjeu.png"
              alt="menu item"
              className="menu-image"
            />
          </button>
        </div>
        {showMenu ? (
          <ul className="menu-list">
            <li className="home-list-item">
              <Link className="link-logo" to="/">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </Link>
            </li>
            <li className="about-list-item">
              <Link className="link-logo" to="/about">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </Link>
            </li>
            <li className="close-item">
              <button
                type="button"
                className="close-button"
                onClick={this.closeMenu}
              >
                <img
                  src="https://res.cloudinary.com/dyhsyterg/image/upload/v1643369220/Shape_hewlfb.png"
                  alt="close icon"
                  className="close-icon"
                />
              </button>
            </li>
          </ul>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
