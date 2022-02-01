import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Footer from '../Footer'

import './index.css'

const appConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class About extends Component {
  state = {
    faqList: [],
    appStatus: appConstants.initial,
  }

  componentDidMount() {
    this.setState({appStatus: appConstants.progress}, this.getDetails)
  }

  startFetching = () => {
    const {history} = this.props
    history.replace('/')
  }

  getDetails = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const {faq} = data
      this.setState({appStatus: appConstants.success, faqList: faq})
    }
  }

  successContainer = () => {
    const {faqList} = this.state
    return (
      <div className="about-middle-container">
        <h1 className="about-heading">About</h1>
        <p className="last-updated">Last update on November 1st 2021.</p>
        <p className="vaccine-distribution">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul testid="faqsUnorderedList" className="ques-list">
          {faqList.map(eachValue => (
            <li className="ques-list-item" key={eachValue.qno}>
              <p className="question">{eachValue.question}</p>
              <p className="answer">{eachValue.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  loaderContainer = () => (
    <div className="main-home-container">
      <div testid="aboutRouteLoader" className="loader-container">
        <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
      </div>
    </div>
  )

  checkCondition = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case appConstants.success:
        return this.successContainer()
      default:
        return this.loaderContainer()
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.checkCondition()}
        <Footer />
      </>
    )
  }
}

export default About
