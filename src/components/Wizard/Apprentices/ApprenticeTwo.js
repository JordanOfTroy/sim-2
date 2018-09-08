import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class ApprenticeTwo extends Component {
  render () {
    return (
      <div>
        <h1>Apprentice Two</h1>
        <input placeholder = 'Please enter text'/>
        <Link to = '/wizard'>
          <button>Previous</button>
        </Link>
        <Link to = '/wizard/apprentice3'>
          <button>Next</button>
        </Link>
      </div>
    )
  }
}