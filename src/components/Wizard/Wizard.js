import React, {Component} from 'react' 
import {Link, Switch, Route} from 'react-router-dom'
import ApprenticeOne from './Apprentices/ApprenticeOne'
import ApprenticeTwo from './Apprentices/ApprenticeTwo'
import ApprenticeThree from './Apprentices/ApprenticeThree'
import ApprenticeFour from './Apprentices/ApprenticeFour'
import {connect} from 'react-redux'
import {resetState} from '../../ducks/reducer'

class Wizard extends Component {

  render () {
    console.log(this.props.match.params)
    return (
      <div>
        <h1>Wizard</h1>
        <Switch>
          <Route exact path = '/wizard' component = {ApprenticeOne} />
          <Route path = '/wizard/apprentice2' component = {ApprenticeTwo} />
          <Route path = '/wizard/apprentice3' component = {ApprenticeThree}/>
          <Route path = '/wizard/apprentice4' component = {ApprenticeFour }/>
        </Switch>
        <Link
        to = '/'
        ><button
         onClick = {this.props.resetState}
         >Cancele</button></Link>
        
      </div>
    )
  }
}

function mapStateToProps () {

  return {
   
  }
}

export default connect(mapStateToProps, {resetState}) (Wizard)