import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios' 


class ApprenticeFour extends Component {
  constructor (props) {
    super (props)

    this.state = {
      propertyName: '',
      address: '',
      city: '',
      stateIN: '',
      zipcode: '',
      imageURL:'',
      mortgage: '',
      rent: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    let {propertyName, 
      address, 
      city,
      stateIN, 
      zipcode, 
      imageURL, 
      mortgage, 
      rent} = this.props
      this.setState({
        propertyName: propertyName,
        address: address,
        city: city,
        stateIN: stateIN,
        zipcode: zipcode,
        imageURL: imageURL,
        mortgage: mortgage,
        rent: rent
      })
      
  }

  handleClick () {
    let {propertyName, address, city, stateIN, zipcode, imageURL, mortgage, rent} = this.state
    axios.post('/api/houses', {propertyName, address, city, stateIN, zipcode, imageURL, mortgage, rent})
  }

  render () {
    return (
      <div>
        <h1>Apprentice Four</h1>
        <div>
          <h4>Property Name: {this.state.propertyName}</h4>
          <h4>Address: {this.state.address}</h4>
          <h4>City: {this.state.city}</h4>
          <h4>State: {this.state.stateIN}</h4>
          <h4>zipcode: {this.state.zipcode}</h4>
          <img src={this.state.imageURL} alt=""/>
          <h4>mortgage: {this.state.mortgage}</h4>
          <h4>rent: {this.state.rent}</h4>
        </div>
        <div>
          <Link to = '/wizard/apprentice3'>
            <button>Previous</button>
          </Link>
          <Link to = '/'>
            <button
            onClick = {this.handleClick}
            >Confirm</button>
          </Link>
        
        </div>
      </div>

    )
  }
}
function mapStateToProps (state) {
  let {propertyName, 
       address, 
       city,
       stateIN, 
       zipcode, 
       imageURL, 
       mortgage, 
       rent} = state

       return {
       propertyName, 
       address, 
       city,
       stateIN, 
       zipcode, 
       imageURL, 
       mortgage, 
       rent 
       }
}


export default connect(mapStateToProps)(ApprenticeFour)