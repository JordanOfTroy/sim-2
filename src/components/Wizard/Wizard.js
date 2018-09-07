import React, {Component} from 'react' 
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
  constructor (props) {
    super(props) 

    this.state = {
      propertyName: '',
      address: '',
      city: '',
      state: '',
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
    console.log('wizProp:', this.props)
    return (
      <div>
        <h1>Wizard</h1>
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
          value = {this.state.state}
          placeholder = 'Please enter State as XX'
          onChange = {this.handleUserInput} 
          name = 'state'/>
        </div>
        <div>
          <input
          value = {this.state.zipcode}
          placeholder = 'Please enter Zipcode'
          onChange = {this.handleUserInput} 
          name = 'zipcode'/>
        </div>
        <div>
          <input
          value = {this.state.zipcode}
          placeholder = 'Please enter URL'
          onChange = {this.handleUserInput} 
          name = 'imageURL'/>
        </div>
        <Link
        to = '/'
        ><button>Cancel</button></Link>
      </div>
    )
  }
}