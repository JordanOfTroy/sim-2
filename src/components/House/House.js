import React from 'react'
// import axios from 'axios'



export default function House (props) {
  
  let {address, city, state, zipcode, imageURL, propertyName, id} = props
  // console.log('houseProps:', id)
  return (
    <div>
      <img src={imageURL} alt="pic of house"/>
      <div>
        <p>{propertyName}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{zipcode}</p>
        <button
        value = {id}
        onClick = {() => props.handleDelete(id)}
        >Delete</button>
      </div>
    </div>
  )
}