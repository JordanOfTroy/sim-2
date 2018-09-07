import React from 'react'

export default function House (props) {
  let {address, city, state, zipcode, imageURL, propertyName} = props
  // console.log('house img', props)
  return (
    <div>
      <img src={imageURL} alt="pic of house"/>
      <div>
        <p>{propertyName}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{zipcode}</p>
      </div>
      <button>Delete this property</button>
      <hr/>
    </div>
  )
}