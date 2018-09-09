let initialState = {
  propertyName: '',
  address: '',
  city: '',
  stateIN: '',
  zipcode: '',
  imageURL:''
}
/************************************************************* */
const HANDLE_APPRENTICE_ONE = 'HANDLE_APPRENTICE_ONE'
/************************************************************* */

export function handleApprenticeOne (info) {
  console.log('reducer:',info)
  return {
    type: HANDLE_APPRENTICE_ONE,
    
  }
}

/************************************************************* */
function reducer (state=initialState, action) {
  switch(action.type) {
    
    case HANDLE_APPRENTICE_ONE:
    let {propertyName, address, city, stateIN, zipcode} = action.payload
      return Object.assign({}, state, {propertyName: propertyName,
                                       address: address,
                                       city: city,
                                       stateIN: stateIN, 
                                       zipcode: zipcode
                                      })
                                      
    default: return state
  }
}

export default reducer