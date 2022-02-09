import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'

import VaccinationDetails from './components/VaccinationDetails'

import About from './components/About'

import StateSpecific from './components/StateSpecific'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vaccination" component={VaccinationDetails} />
      <Route exact path="/about" component={About} />
      <Route exact path="/state/:stateCode" component={StateSpecific} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
