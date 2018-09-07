import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('/api/houses').then(res => this.setState({
      houses: res.data
    }))
  }


  render () {
    let {houses} = this.state
    if (houses.length > 0) {
      let houseList = houses.map((house, index) => {
        return (
          <div key = {index}>
            <House
            id = {house.id}
            propertyName = {house.propertyname}
            address = {house.address}
            state = {house.state}
            city = {house.city}
            zipcode = {house.zipcode}
            imageURL = {house.imageurl}
            />
          </div>
        )
      })
      return (
        <div>
          <Link to = '/wizard'
          ><button>Add New Property</button></Link>
          {houseList}
        </div>
      )
    }
    else {
      return (
      <div>
        <h1>Dashboard</h1>
        <Link to = '/wizard'
        ><button>Add New Property</button></Link>
      </div>
    )}
  }
}