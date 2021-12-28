import React, { useState } from 'react'
import './componentsCSS/showData.css'

const ShowData = (props) => {
  const [data, setData] = useState({
    userData: props.data,
  })
  const { userData } = { ...data }

  return (
    <div className='data-group'>
      <h2 className='dataTitle'>DATA</h2>
      {userData.map((user, index) => {
        if (index === 0) {
          return null
        } else {
          return (
            <div className='data-container'>
              <p className='element'>
                {user.name ? <span>Name : {user.name} </span> : ''}
              </p>
              <p className='element'>
                {user.address ? <span>Address : {user.address} </span> : ''}
              </p>
              <p className='element'>
                {user.contact ? <span>Contact : {user.contact} </span> : ''}
              </p>
              <p className='element'>
                {user.college ? <span>College : {user.college} </span> : ''}
              </p>
              <button onClick={() => props.onSubmit(index)}>Edit</button>
            </div>
          )
        }
      })}
      <button className='btn-data' onClick={() => props.onClick()}>
        ADD NEW DATA
      </button>
    </div>
  )
}

export default ShowData
