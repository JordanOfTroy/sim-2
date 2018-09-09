let initialState = {
  propertyName: '',
  address: '',
  city: '',
  stateIN: '',
  zipcode: '',
  imageURL:'',
  mortgage: '',
  rent: ''
}
/************************************************************* */
const HANDLE_APPRENTICE_ONE = 'HANDLE_APPRENTICE_ONE',
      UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL',
      UPDATE_DAT_MONEY = 'UPDATE_DAT_MONEY'
/************************************************************* */

export function handleApprenticeOne (info) {
  console.log('handelApprenticeOne:',info)
  return {
    type: HANDLE_APPRENTICE_ONE,
    payload: info   
  }
}

export function updateImageURL (url) {
  console.log('updateURL', url)
  return {
    type: UPDATE_IMAGE_URL,
    payload: url
  }
}

export function updateDatMoney (datInfo) {
  console.log('datINfoy', datInfo)
  return {
    type: UPDATE_DAT_MONEY,
    payload: datInfo
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

    case UPDATE_IMAGE_URL:
      let {imageURL} = action.payload
      return Object.assign({}, state, {imageURL: imageURL})
    

    case UPDATE_DAT_MONEY:
      let {mortgage, rent} = action.payload 
      return Object.assign({}, state, {mortgage: mortgage, rent: rent})
    
    default: return state
  }
  
}

export default reducer