import {VscGithubAlt} from 'react-icons/vsc'

import {FiInstagram} from 'react-icons/fi'

import {FaTwitter} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <footer className="main-footer-container">
      <h1 className="website-name">
        <span>COVID19</span>
        <span className="blue-text">INDIA</span>
      </h1>
      <p className="footer-note">
        we stand with everyone fighting on the front lines
      </p>
      <div className="social-icon-container">
        <VscGithubAlt className="footer-icon" />
        <FiInstagram className="footer-icon" />
        <FaTwitter className="footer-icon" />
      </div>
    </footer>
  )
}
