import {Component} from 'react'

import {Link} from 'react-router-dom'

import {BsSearch} from 'react-icons/bs'

import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import {BiChevronRightSquare} from 'react-icons/bi'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Footer from '../Footer'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const appConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    countryWideList: [],
    appStatus: appConstants.initial,
    searchInput: '',
    searchList: [],
  }

  componentDidMount() {
    this.startFetching()
  }

  startFetching = () => {
    this.setState(
      {appStatus: appConstants.progress},
      this.getCountryWideDetails,
    )
  }

  getCountryWideDetails = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const newData = statesList.map(eachValue => {
        if (data[eachValue.state_code]) {
          return {
            confirmed: data[`${eachValue.state_code}`].total.confirmed,
            recovered: data[`${eachValue.state_code}`].total.recovered,
            deceased: data[`${eachValue.state_code}`].total.deceased,
            population: data[`${eachValue.state_code}`].meta.population,
            active:
              data[`${eachValue.state_code}`].total.confirmed -
              (data[`${eachValue.state_code}`].total.recovered +
                data[`${eachValue.state_code}`].total.deceased),
            id: eachValue.state_code,
            name: eachValue.state_name,
          }
        }
        return {
          confirmed: 0,
          recovered: 0,
          deceased: 0,
          population: 0,
          active: 0,
          id: eachValue.state_code,
          name: eachValue.state_name,
        }
      })
      this.setState({countryWideList: newData, appStatus: appConstants.success})
    }
  }

  ascendingList = () => {
    const {countryWideList} = this.state
    const newCountryWideList = countryWideList.sort((a, b) => {
      const fa = a.name.toLowerCase()
      const fb = b.name.toLowerCase()
      if (fa < fb) {
        return -1
      }
      if (fa > fb) {
        return 1
      }
      return 0
    })
    this.setState({countryWideList: newCountryWideList})
  }

  descendingList = () => {
    const {countryWideList} = this.state
    const newCountryWideList = countryWideList.sort((a, b) => {
      const fa = a.name.toLowerCase()
      const fb = b.name.toLowerCase()
      if (fa < fb) {
        return 1
      }
      if (fa > fb) {
        return -1
      }
      return 0
    })
    this.setState({countryWideList: newCountryWideList})
  }

  searchInputChange = e => {
    const newSearchList = statesList.filter(eachValue =>
      eachValue.state_name.toLowerCase().includes(e.target.value.toLowerCase()),
    )
    this.setState({searchInput: e.target.value, searchList: newSearchList})
  }

  successContainer = () => {
    const {countryWideList, searchInput, searchList} = this.state
    const confirmedArray = countryWideList.map(eachValue => eachValue.confirmed)
    const activeArray = countryWideList.map(eachValue => eachValue.active)
    const recoveredArray = countryWideList.map(eachValue => eachValue.recovered)
    const deceasedArray = countryWideList.map(eachValue => eachValue.deceased)
    const totalConfirmed = confirmedArray.reduce((a, b) => a + b, 0)
    const totalActive = activeArray.reduce((a, b) => a + b, 0)
    const totalRecovered = recoveredArray.reduce((a, b) => a + b, 0)
    const totalDeceased = deceasedArray.reduce((a, b) => a + b, 0)
    return (
      <div className="home-middle-container">
        <div className="searchbar-holder">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="searchbar-input"
            placeholder="Enter the State"
            value={searchInput}
            onChange={this.searchInputChange}
          />
        </div>
        {searchList.length !== 0 && searchInput !== '' && (
          <ul className="search-container" testid="searchResultsUnorderedList">
            {searchList.map(eachValue => (
              <Link
                to={`/state/${eachValue.state_code}`}
                className="search-link"
              >
                <li className="search-list-item" key={eachValue.state_code}>
                  <p className="item-name">{eachValue.state_name}</p>
                  <div className="icon-container">
                    <p className="item-code">{eachValue.state_code}</p>
                    <BiChevronRightSquare color="#FACC15" />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}
        <div className="home-result-container">
          <div className="home-top-list">
            <div className="list-item" testid="countryWideConfirmedCases">
              <p className="confirm-card-name">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641905267/confirmed_qmelok.svg"
                className="confirm-card-image"
                alt="country wide confirmed cases pic"
              />
              <p className="confirm-card-number">{totalConfirmed}</p>
            </div>
            <div className="list-item" testid="countryWideActiveCases">
              <p className="active-card-name">Active</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641908440/active_tmhkjf.svg"
                className="active-card-image"
                alt="country wide active cases pic"
              />
              <p className="active-card-number">{totalActive}</p>
            </div>
            <div className="list-item" testid="countryWideRecoveredCases">
              <p className="recovered-card-name">Recovered</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909310/recovered_dtfpwl.svg"
                className="recovered-card-image"
                alt="country wide recovered cases pic"
              />
              <p className="recovered-card-number">{totalRecovered}</p>
            </div>
            <div className="list-item" testid="countryWideDeceasedCases">
              <p className="deceased-card-name">Deceased</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909662/deceased_tskayc.svg"
                className="deceased-card-image"
                alt="country wide deceased cases pic"
              />
              <p className="deceased-card-number">{totalDeceased}</p>
            </div>
          </div>
          <div testid="stateWiseCovidDataTable" className="state-table">
            <div className="state-result-heading">
              <div className="state-ul-holder">
                <p className="first-column-title">States/UT</p>
                <button
                  type="button"
                  className="icon-button"
                  onClick={this.ascendingList}
                  testid="ascendingSort"
                >
                  <FcGenericSortingAsc className="ascending-icon" />
                </button>
                <button
                  type="button"
                  className="icon-button"
                  onClick={this.descendingList}
                  testid="descendingSort"
                >
                  <FcGenericSortingDesc className="descending-icon" />
                </button>
              </div>
              <p className="general-column-title">Confirmed</p>
              <p className="general-column-title">Active</p>
              <p className="general-column-title">Recovered</p>
              <p className="general-column-title">Deceased</p>
              <p className="general-column-title">Population</p>
            </div>
            <ul className="state-result-table">
              {countryWideList.map(eachValue => (
                <li className="state-result-row" key={eachValue.id}>
                  <Link
                    to={`/state/${eachValue.id}`}
                    className="state-link-item"
                  >
                    <p className="name-column">{eachValue.name}</p>
                  </Link>
                  <p className="number-column red">{eachValue.confirmed}</p>
                  <p className="number-column blue">{eachValue.active}</p>
                  <p className="number-column green">{eachValue.recovered}</p>
                  <p className="number-column silver">{eachValue.deceased}</p>
                  <p className="number-column grey">{eachValue.population}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  loaderContainer = () => (
    <div testid="homeRouteLoader" className="loader-container">
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
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

export default Home
