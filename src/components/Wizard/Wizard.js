import React, {Component} from 'react' 
import {Link, Switch, Route} from 'react-router-dom'
import ApprenticeOne from './Apprentices/ApprenticeOne'
import ApprenticeTwo from './Apprentices/ApprenticeTwo'
import ApprenticeThree from './Apprentices/ApprenticeThree'

export default class Wizard extends Component {
  
  render () {
    return (
      <div>
        <h1>Wizard</h1>
        <Switch>
          <Route exact path = '/wizard' component = {ApprenticeOne} />
          <Route path = '/wizard/apprentice2' component = {ApprenticeTwo} />
          <Route path = '/wizard/apprentice3' component = {ApprenticeThree}/>
        </Switch>
        <Link
        to = '/'
        ><button>Cancel</button></Link>
        
      </div>
    )
  }
}