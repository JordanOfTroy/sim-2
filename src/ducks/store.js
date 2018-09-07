import {createStore} from 'react-redux' 
import reducer from './reducer'
const store = createStore(reducer)

module.exports = store