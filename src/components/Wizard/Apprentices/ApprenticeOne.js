import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleApprenticeOne} from '../../../ducks/reducer'


class ApprenticeOne extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      propertyName: '',
      address: '',
      city: '',
      stateIN: '',
      zipcode: '',
      imageURL:''

    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleUserInput (e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleClick () {
    let info = this.state
    handleApprenticeOne(info)
  }
 

  render () {
    // console.log('aprOne:',this.state)
    return (
      <div>
        <h1>Apprentice One</h1>
        <div>
          <input
          value = {this.state.propertyName}
          placeholder = 'Please enter Property Name'
          onChange = {this.handleUserInput} 
          name = 'propertyName'/>
        </div>
        <div>
          <input
          value = {this.state.address}
          placeholder = 'Please enter Street Address'
          onChange = {this.handleUserInput} 
          name = 'address'/>
        </div>
        <div>
          <input
          value = {this.state.city}
          placeholder = 'Please enter City'
          onChange = {this.handleUserInput} 
          name = 'city'/>
        </div>
        <div>
          <input
          value = {this.state.stateIN}
          placeholder = 'Please enter State initials'
          onChange = {this.handleUserInput} 
          name = 'stateIN'/>
        </div>
        <div>
          <input
          value = {this.state.zipcode}
          placeholder = 'Please enter Zipcode'
          onChange = {this.handleUserInput} 
          name = 'zipcode'/>
        </div>
        <Link
        to = '/wizard/apprentice2'
        ><button
          onClick ={this.handleClick}
        >Next</button>
        </Link>
        
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {propertyName, address, stateIN, city, zipcode} = state

  return {
    propertyName, 
    address, 
    city, 
    stateIN,
    zipcode
  }
}

export default connect(mapStateToProps, {handleApprenticeOne})(ApprenticeOne)