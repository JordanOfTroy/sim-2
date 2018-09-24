import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateDatMoney} from '../../../ducks/reducer'


class ApprenticeThree extends Component {

  constructor (props) {
    super (props)

    this.state = {
      mortgage: '',
      rent: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    let datInfo = this.state
    this.props.updateDatMoney(datInfo)
    
  }

  componentDidMount() {
    let {mortgage, rent} = this.props
    this.setState({
      mortgage: mortgage,
      rent: rent
    })
  }

  render () {
    return (
      <div>
        <h1>Apprentice Three</h1>
        <div>
          <input
          name = 'mortgage'
          value = {this.state.mortgage} 
          onChange = {this.handleInput}
          placeholder = 'Please enter Mortgage'/>
        <input
          name = 'rent'
          value = {this.state.rent}
          onChange = {this.handleInput} 
          placeholder = 'Please enter Rent'/>
        </div>
        <Link to = '/wizard/apprentice2'>
          <button>Previous</button>
        </Link>
        <Link to = '/wizard/apprentice4'>
          <button
            onClick = {this.handleClick}
          >Add Houes</button>
        </Link>
       
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {mortgage, rent} = state

  return {
    mortgage, 
    rent
  }
}

export default connect(mapStateToProps, {updateDatMoney})(ApprenticeThree)