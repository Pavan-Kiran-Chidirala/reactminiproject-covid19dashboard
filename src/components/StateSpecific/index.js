import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {LineChart, XAxis, YAxis, Tooltip, Line, BarChart, Bar} from 'recharts'

import Header from '../Header'

import Footer from '../Footer'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875895/Group_7362andaman_1_jh56ac.svg',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877291/Group_7354andhra_dhfqkx.svg',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877187/Group_7340arunachal_i2mqek.svg',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874959/Group_7341assam_mafnkb.svg',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874425/Group_7335bihar_zbj8hr.svg',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875818/Group_7361chandigargh_i4y1ct.svg',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875355/Group_7353chattisgarh_nka5kq.svg',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875946/Group_7357daman_xojaml.svg',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643876123/Group_7358delhi_lzftgr.svg',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877071/Group_7349goa_vigjoh.svg',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874554/Group_7337gujarat_myivom.svg',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874182/Group_7332haryana_j5p8vb.svg',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643872638/Group_7364himachal_qzmfyy.svg',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643866939/Group_7328jammu_dgsgns.svg',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874637/Group_7342jharkhand_a2ef27.svg',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875591/Group_7339karnataka_keqvvv.svg',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875646/Group_7355kerala_hy2ctu.svg',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643876202/Group_7363ladakh_wgfyhj.svg',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875997/Group_7359lakshadweep_apt34r.svg',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875483/Group_7350maharastra_va3umd.svg',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874482/Group_7336madhyapradesh_pp3zi4.svg',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875189/Group_7346manipur_bioduk.svg',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875073/Group_7344meghalaya_axne7x.svg',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877350/Group_7347mizeram_vrws31.svg',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875133/Group_7345nagaland_pa7ink.svg',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875408/Group_7348orissa_ogt9qf.svg',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643876052/Group_7360pudicherry_dqozta.svg',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874057/Group_7330punjab_uotgvg.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874290/Group_7333rajastan_njuouf.svg',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874848/Group_7338sikkim_vzwduv.svg',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877485/Group_7356tamilnadu_j91huf.svg',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875534/Group_7351telangana_gcis15.svg',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875284/Group_7352tripura_haza0j.svg',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874361/Group_7334uttarpradesh_wmgalk.svg',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874117/Group_7331uttarakhand_tzke2z.svg',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874758/Group_7343westbengal_pob4u5.svg',
  },
]

const appConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const cardConstants = {
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
}

const trendStatus = {
  cumulative: 'CUMULATIVE',
  daily: 'DAILY',
}

let lineChartData = {}

let districtNames = {}

class StateSpecific extends Component {
  state = {
    requiredBasicDetails: [],
    cardStatus: cardConstants.confirmed,
    appStatus1: appConstants.initial,
    appStatus2: appConstants.initial,
    timeLineData: [],
    trendState: trendStatus.cumulative,
    selectValue: 'Select District',
  }

  componentDidMount() {
    this.setState({appStatus1: appConstants.progress}, this.getStateDetails)
    this.setState({appStatus2: appConstants.progress}, this.getTimeLineDetails)
  }

  startFetching = () => {
    const {history} = this.props
    history.replace('/')
  }

  changeDateFormat = dateValue => {
    const lastIndexValue = dateValue.slice(dateValue.length - 1)
    switch (lastIndexValue) {
      case '1':
        return lastIndexValue.concat('st')
      case '2':
        return lastIndexValue.concat('nd')

      case '3':
        return lastIndexValue.concat('rd')
      default:
        return lastIndexValue.concat('th')
    }
  }

  getStateDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const id = stateCode
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(url)
    const data = await response.json()
    const codeList = statesList.map(eachValue => eachValue.state_code)
    if (!codeList.includes(id)) {
      const {history} = this.props
      history.replace('/not-found')
    }
    /* const date = new Date(data[id].meta.last_updated).toLocaleDateString(
      'en-us',
      {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      },
    )
    const dateList = date.split(' ')
    const dateValue = dateList[1].replace(',', '')
    const newDateValue = this.changeDateFormat(dateValue)
    dateList[1] = newDateValue
    const resultDateValue = dateList.join(' ')! */
    if (response.ok) {
      const newData = {
        confirmed: data[id].total.confirmed,
        recovered: data[id].total.recovered,
        deceased: data[id].total.deceased,
        population: data[id].meta.population,
        active:
          data[id].total.confirmed -
          (data[id].total.recovered + data[id].total.deceased),
        idValue: id,
        name: statesList.find(eachValue => eachValue.state_code === id)
          .state_name,
        districts: data[id].districts,
        tested: data[id].total.tested,
        lastUpdated: data[id].meta.last_updated,
        imageUrl: statesList.find(eachValue => eachValue.state_code === id)
          .image_url,
      }
      this.setState({
        requiredBasicDetails: newData,
        appStatus1: appConstants.success,
      })
    }
  }

  getTimeLineDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const url = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const response = await fetch(url)
    const data = await response.json()
    const codeList = statesList.map(eachValue => eachValue.state_code)
    if (!codeList.includes(stateCode)) {
      const {history} = this.props
      history.replace('/not-found')
    }
    if (response.ok) {
      districtNames = data[`${stateCode}`].districts
      const newData = data[`${stateCode}`].dates
      this.setState({timeLineData: newData, appStatus2: appConstants.success})
    }
  }

  descendingList = newDistricts => {
    const newDistrictsList = newDistricts.sort((a, b) => {
      const fa = a.value
      const fb = b.value
      if (fa < fb) {
        return 1
      }
      if (fa > fb) {
        return -1
      }
      return 0
    })
    return newDistrictsList
  }

  onCardClick = cardState => this.setState({cardStatus: cardState})

  getDistrictValues = () => {
    const {requiredBasicDetails, cardStatus} = this.state
    const {districts} = requiredBasicDetails
    const newDistricts = []
    switch (cardStatus) {
      case cardConstants.confirmed:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed,
          }),
        )
        return this.descendingList(newDistricts)
      case cardConstants.deceased:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased,
          }),
        )
        return this.descendingList(newDistricts)
      case cardConstants.recovered:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.recovered === undefined
                ? 0
                : districts[key].total.recovered,
          }),
        )
        return this.descendingList(newDistricts)
      default:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              (districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed) -
              ((districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased) +
                (districts[key].total.recovered === undefined
                  ? 0
                  : districts[key].total.recovered)),
          }),
        )
        return this.descendingList(newDistricts)
    }
  }

  stateSuccessContainer = () => {
    const {requiredBasicDetails, cardStatus} = this.state
    const confirmedCardClassName =
      cardStatus === cardConstants.confirmed
        ? 'card-list-item card-red'
        : 'card-list-item'
    const activeCardClassName =
      cardStatus === cardConstants.active
        ? 'card-list-item card-blue'
        : 'card-list-item'
    const recoveredCardClassName =
      cardStatus === cardConstants.recovered
        ? 'card-list-item card-green'
        : 'card-list-item'
    const deceasedCardClassName =
      cardStatus === cardConstants.deceased
        ? 'card-list-item card-grey'
        : 'card-list-item'

    let districtValue = []
    if (requiredBasicDetails.length !== 0) {
      districtValue = this.getDistrictValues()
    }
    return (
      <div className="state-content-container">
        <div className="top-container">
          <div className="state-name-container">
            <h1 className="state-name">{requiredBasicDetails.name}</h1>
          </div>
          <div className="top-second-half-container">
            <p className="tested-name">Tested</p>
            <p className="tested-result">{requiredBasicDetails.tested}</p>
          </div>
        </div>
        <p className="last-updated-para">
          Last update on {requiredBasicDetails.lastUpdated}.
        </p>
        <ul className="state-specific-card-list">
          <li className={confirmedCardClassName}>
            <button
              type="button"
              className="card-list-button"
              onClick={() => this.onCardClick(cardConstants.confirmed)}
              testid="stateSpecificConfirmedCasesContainer"
            >
              <p className="confirm-card-name">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641905267/confirmed_qmelok.svg"
                className="confirm-card-image"
                alt="state specific confirmed cases pic"
              />
              <p className="confirm-card-number">
                {requiredBasicDetails.confirmed}
              </p>
            </button>
          </li>
          <li className={activeCardClassName}>
            <button
              type="button"
              className="card-list-button"
              onClick={() => this.onCardClick(cardConstants.active)}
              testid="stateSpecificActiveCasesContainer"
            >
              <p className="active-card-name">Active</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641908440/active_tmhkjf.svg"
                className="active-card-image"
                alt="state specific active cases pic"
              />
              <p className="active-card-number">
                {requiredBasicDetails.active}
              </p>
            </button>
          </li>
          <li className={recoveredCardClassName}>
            <button
              type="button"
              className="card-list-button"
              onClick={() => this.onCardClick(cardConstants.recovered)}
              testid="stateSpecificRecoveredCasesContainer"
            >
              <p className="recovered-card-name">Recovered</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909310/recovered_dtfpwl.svg"
                className="recovered-card-image"
                alt="state specific recovered cases pic"
              />
              <p className="recovered-card-number">
                {requiredBasicDetails.recovered}
              </p>
            </button>
          </li>
          <li className={deceasedCardClassName}>
            <button
              type="button"
              className="card-list-button"
              onClick={() => this.onCardClick(cardConstants.deceased)}
              testid="stateSpecificDeceasedCasesContainer"
            >
              <p className="deceased-card-name">Deceased</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909662/deceased_tskayc.svg"
                className="deceased-card-image"
                alt="state specific deceased cases pic"
              />
              <p className="deceased-card-number">
                {requiredBasicDetails.deceased}
              </p>
            </button>
          </li>
        </ul>

        <div className="image-container">
          <img
            className="state-image"
            src={requiredBasicDetails.imageUrl}
            alt={requiredBasicDetails.idValue}
          />
          <div className="image-content">
            <p className="ncp-report">NCP report</p>
            <p className="population-heading">Population</p>
            <p className="content-numbers">{requiredBasicDetails.population}</p>
            <p className="population-heading">Tested</p>
            <p className="content-numbers">{requiredBasicDetails.tested}</p>
          </div>
        </div>

        <h1 className="top-districts">Top Districts</h1>
        <ul testid="topDistrictsUnorderedList" className="top-districts-list">
          {districtValue.map(eachValue => (
            <li className="top-districts-list-item" key={eachValue.name}>
              <p className="top-districts-name">{eachValue.value}</p>
              <p className="top-districts-number">{eachValue.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  stateLoaderContainer = () => (
    <div testid="stateDetailsLoader" className="state-loader-container">
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  timeLineLoaderContainer = () => (
    <div testid="timelinesDataLoader" className="state-loader-container">
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  stateContentStatus = () => {
    const {appStatus1} = this.state
    switch (appStatus1) {
      case appConstants.success:
        return this.stateSuccessContainer()

      default:
        return this.stateLoaderContainer()
    }
  }

  timeLineContentStatus = () => {
    const {appStatus2} = this.state
    switch (appStatus2) {
      case appConstants.success:
        return this.timeLineSuccessContainer()

      default:
        return this.timeLineLoaderContainer()
    }
  }

  getDateForBarChart = key => {
    const date = new Date(key)
    const newDate = date.toLocaleDateString('en-us', {
      month: 'short',
      day: '2-digit',
    })
    const dateList = newDate.split(' ')
    const dateFormat = []
    dateFormat.push(dateList[1])
    dateFormat.push(dateList[0].toUpperCase())
    const result = dateFormat.join(' ')
    return result
  }

  getTimeLineChartValues = () => {
    const {timeLineData, cardStatus} = this.state
    const newTimeLineData = []
    switch (cardStatus) {
      case cardConstants.confirmed:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timeLineData[key].total.confirmed,
          }),
        )
        return newTimeLineData
      case cardConstants.deceased:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timeLineData[key].total.deceased,
          }),
        )
        return newTimeLineData
      case cardConstants.recovered:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timeLineData[key].total.recovered,
          }),
        )
        return newTimeLineData
      default:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number:
              (timeLineData[key].total.confirmed === undefined
                ? 0
                : timeLineData[key].total.confirmed) -
              ((timeLineData[key].total.deceased === undefined
                ? 0
                : timeLineData[key].total.deceased) +
                (timeLineData[key].total.recovered === undefined
                  ? 0
                  : timeLineData[key].total.recovered)),
          }),
        )
        return newTimeLineData
    }
  }

  getLineChartData = () => {
    const {selectValue, trendState} = this.state
    let {timeLineData} = this.state
    if (selectValue !== 'Select District') {
      timeLineData = districtNames[selectValue].dates
    }
    const confirmedData = []
    Object.keys(timeLineData).forEach(key =>
      confirmedData.push({
        date: key,
        number:
          timeLineData[key].total.confirmed === undefined
            ? 0
            : timeLineData[key].total.confirmed,
      }),
    )
    const activeData = []
    Object.keys(timeLineData).forEach(key =>
      activeData.push({
        date: key,
        number:
          (timeLineData[key].total.confirmed === undefined
            ? 0
            : timeLineData[key].total.confirmed) -
          ((timeLineData[key].total.deceased === undefined
            ? 0
            : timeLineData[key].total.deceased) +
            (timeLineData[key].total.recovered === undefined
              ? 0
              : timeLineData[key].total.recovered)),
      }),
    )
    const recoveredData = []
    Object.keys(timeLineData).forEach(key =>
      recoveredData.push({
        date: key,
        number:
          timeLineData[key].total.recovered === undefined
            ? 0
            : timeLineData[key].total.recovered,
      }),
    )
    const deceasedData = []
    Object.keys(timeLineData).forEach(key =>
      deceasedData.push({
        date: key,
        number:
          timeLineData[key].total.deceased === undefined
            ? 0
            : timeLineData[key].total.deceased,
      }),
    )
    const testedData = []
    Object.keys(timeLineData).forEach(key =>
      testedData.push({
        date: key,
        number:
          timeLineData[key].total.tested === undefined
            ? 0
            : timeLineData[key].total.tested,
      }),
    )
    lineChartData = {
      confirmed: confirmedData,
      active: activeData,
      recovered: recoveredData,
      deceased: deceasedData,
      tested: testedData,
    }

    if (trendState === trendStatus.daily) {
      let refValue = 0
      const newConfirmedData = confirmedData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      refValue = 0
      const newRecoveredData = recoveredData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      refValue = 0
      const newDeceasedData = deceasedData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      refValue = 0
      const newActiveData = activeData.map(eachValue => {
        let newValue = 0
        if (eachValue.number > refValue) {
          newValue = eachValue.number - refValue
          refValue = eachValue.number
        }
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      refValue = 0
      const newTestedData = testedData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      newConfirmedData.splice(0, 1)
      newActiveData.splice(0, 1)
      newRecoveredData.splice(0, 1)
      newDeceasedData.splice(0, 1)
      newTestedData.splice(0, 1)
      lineChartData = {
        confirmed: newConfirmedData,
        active: newActiveData,
        recovered: newRecoveredData,
        deceased: newDeceasedData,
        tested: newTestedData,
      }
    }
  }

  selectChange = e => {
    this.setState({selectValue: e.target.value}, this.getLineChartData)
  }

  trendChange = value => {
    this.setState({trendState: value})
  }

  timeLineSuccessContainer = () => {
    const {timeLineData, cardStatus, trendState, selectValue} = this.state

    let newTimeLineData = []
    if (timeLineData.length !== 0) {
      newTimeLineData = this.getTimeLineChartValues()
      newTimeLineData = newTimeLineData.slice(-10)
    }
    let colorValue = '#9A0E31'
    switch (cardStatus) {
      case cardConstants.active:
        colorValue = '#0A4FA0'
        break
      case cardConstants.recovered:
        colorValue = '#216837'
        break
      case cardConstants.deceased:
        colorValue = '#474C57'
        break
      default:
        colorValue = '#9A0E31'
        break
    }
    this.getLineChartData()
    const daily =
      trendState === trendStatus.daily
        ? 'trend-button highlight-trend'
        : 'trend-button'
    const cumulative =
      trendState === trendStatus.cumulative
        ? 'trend-button highlight-trend'
        : 'trend-button'
    const selectOptions = Object.keys(districtNames)

    return (
      <div testid="lineChartsContainer" className="graphs-container">
        <div className="graphs-lg">
          <div className="bar-chart-lg">
            <BarChart
              width={700}
              height={240}
              barSize={35}
              data={newTimeLineData}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                interval={0}
                fontSize={10}
                tickLine={0}
                tick={{fill: colorValue, strokeWidth: 1}}
              />
              <Bar
                dataKey="number"
                fill={colorValue}
                radius={[5, 5, 0, 0]}
                label={{
                  position: 'top',
                  fill: colorValue,
                  fontSize: 10,
                }}
              />
            </BarChart>
          </div>
          <h1 className="daily-spread-trends">Spread Trends</h1>
          <div className="trend-holder">
            <button
              type="button"
              className={cumulative}
              onClick={() => this.trendChange(trendStatus.cumulative)}
            >
              Cumulative
            </button>
            <button
              type="button"
              className={daily}
              onClick={() => this.trendChange(trendStatus.daily)}
            >
              Daily
            </button>
          </div>
          <div className="select-container">
            <select
              value={selectValue}
              className="select-element"
              onChange={this.selectChange}
            >
              <option value="Select District">Select District</option>
              {selectOptions.map(eachValue => (
                <option key={eachValue} value={eachValue}>
                  {eachValue}
                </option>
              ))}
            </select>
          </div>
          <div className="line-chart-lg">
            <div className="confirmed-chart">
              <p className="confirmed-title">Confirmed</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartData.confirmed}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={2}
                  dot={{
                    fill: '#FF073A',
                  }}
                />
              </LineChart>
            </div>
            <div className="active-chart">
              <p className="active-title">Total Active</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartData.active}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={2}
                  dot={{
                    fill: '#007BFF',
                  }}
                />
              </LineChart>
            </div>
            <div className="recovered-chart">
              <p className="recovered-title">Recovered</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartData.recovered}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#27A243', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#27A243', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#27A243"
                  strokeWidth={2}
                  dot={{
                    fill: '#27A243',
                  }}
                />
              </LineChart>
            </div>
            <div className="deceased-chart">
              <p className="deceased-title">Deceased</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartData.deceased}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#6C757D', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#6C757D', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#6C757D"
                  strokeWidth={2}
                  dot={{
                    fill: '#6C757D',
                  }}
                />
              </LineChart>
            </div>
            <div className="tested-chart">
              <p className="tested-title">Tested</p>
              <LineChart
                width={730}
                height={200}
                data={lineChartData.tested}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#9673B9', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#9673B9', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#9673B9"
                  strokeWidth={2}
                  dot={{
                    fill: '#9673B9',
                  }}
                />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="graphs-sm">
          <div className="bar-chart-sm">
            <BarChart
              width={350}
              height={140}
              barSize={16}
              data={newTimeLineData}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                interval={0}
                fontSize={6}
                tickLine={0}
                tick={{fill: colorValue, strokeWidth: 1}}
              />
              <Bar
                dataKey="number"
                fill={colorValue}
                radius={[3, 3, 0, 0]}
                label={{
                  position: 'top',
                  fill: colorValue,
                  fontSize: 6,
                }}
              />
            </BarChart>
          </div>
          <h1 className="daily-spread-trends">Daily Spread Trends</h1>
          <div className="trend-holder">
            <button
              type="button"
              className={cumulative}
              onClick={() => this.trendChange(trendStatus.cumulative)}
            >
              Cumulative
            </button>
            <button
              type="button"
              className={daily}
              onClick={() => this.trendChange(trendStatus.daily)}
            >
              Daily
            </button>
          </div>
          <div className="select-container">
            <select
              value={selectValue}
              className="select-element"
              onChange={this.selectChange}
            >
              <option value="Select District">Select District</option>
              {selectOptions.map(eachValue => (
                <option key={eachValue} value={eachValue}>
                  {eachValue}
                </option>
              ))}
            </select>
          </div>
          <div className="line-chart-sm">
            <div className="confirmed-chart">
              <p className="confirmed-title">Confirmed</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.confirmed}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={1}
                  dot={{
                    fill: '#FF073A',
                    r: 1,
                  }}
                />
              </LineChart>
            </div>
            <div className="active-chart">
              <p className="active-title">Total Active</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.active}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={1}
                  dot={{
                    fill: '#007BFF',
                    r: 1,
                  }}
                />
              </LineChart>
            </div>
            <div className="recovered-chart">
              <p className="recovered-title">Recovered</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.recovered}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#27A243', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#27A243', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#27A243"
                  strokeWidth={1}
                  dot={{
                    fill: '#27A243',
                    r: 1,
                  }}
                />
              </LineChart>
            </div>
            <div className="deceased-chart">
              <p className="deceased-title">Deceased</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.recovered}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#6C757D', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#6C757D', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#6C757D"
                  strokeWidth={1}
                  dot={{
                    fill: '#6C757D',
                    r: 1,
                  }}
                />
              </LineChart>
            </div>
            <div className="tested-chart">
              <p className="tested-title">Tested</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.recovered}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#9673B9', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#9673B9', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#9673B9"
                  strokeWidth={1}
                  dot={{
                    fill: '#9673B9',
                    r: 1,
                  }}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="main-specific-container">
          <Header />
          {this.stateContentStatus()}
          {this.timeLineContentStatus()}
          <Footer />
        </div>
      </>
    )
  }
}

export default StateSpecific
