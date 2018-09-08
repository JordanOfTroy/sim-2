import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class ApprenticeThree extends Component {
  render () {
    return (
      <div>
        <h1>Apprentice Three</h1>
        <input placeholder = 'Please enter text'/>
        <Link to = '/wizard/apprentice2'>
          <button>Previous</button>
        </Link>
        <button>Add Houes</button>
      </div>
    )
  }
}