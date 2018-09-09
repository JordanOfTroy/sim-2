import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateImageURL} from '../../../ducks/reducer'


class ApprenticeTwo extends Component {

  constructor (props) {
    super (props)

    this.state = {
      imageURL: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput (e) {
    this.setState({
      imageURL: e.target.value
    })
  }

  handleClick () {
    let imageURL = this.state
    this.props.updateImageURL(imageURL)
  }


  render () {
    return (
      <div>
        <h1>Apprentice Two</h1>
        <input 
        onChange = {this.handleInput}
        placeholder = 'Please enter image'/>
        <Link to = '/wizard'>
          <button>Previous</button>
        </Link>
        <Link 
        onClick = {this.handleClick}
        to = '/wizard/apprentice3'>
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {imageURL} = state

  return {
   imageURL
  }
}

export default connect(mapStateToProps, {updateImageURL})(ApprenticeTwo)