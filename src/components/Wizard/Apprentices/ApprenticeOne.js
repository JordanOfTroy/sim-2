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
  }

  handleUserInput (e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

 

  render () {
    console.log(this.props)
    let {handleApprenticeOne} = this.props
    return (
      <div>
        <h1>Apprentice One</h1>
        <div>
          <input
          placeholder = 'Please enter Property Name'
          onChange = {(e) => handleApprenticeOne(e)} 
          name = 'propertyName'/>
        </div>
        <div>
          <input
          placeholder = 'Please enter Street Address'
          onChange = {(e) => handleApprenticeOne(e)} 
          name = 'address'/>
        </div>
        <div>
          <input
          placeholder = 'Please enter City'
          onChange = {(e) => handleApprenticeOne(e)} 
          name = 'city'/>
        </div>
        <div>
          <input
          placeholder = 'Please enter State initials'
          onChange = {(e) => handleApprenticeOne(e)} 
          name = 'stateIN'/>
        </div>
        <div>
          <input
          placeholder = 'Please enter Zipcode'
          onChange = {(e) => handleApprenticeOne(e)} 
          name = 'zipcode'/>
        </div>
        <Link
        to = '/wizard/apprentice2'
        ><button
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