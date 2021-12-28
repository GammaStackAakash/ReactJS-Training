import React, { useState } from 'react'
import './componentsCSS/comp.css'
import FormData from './formData'
import ShowData from './showData'

const MainComponent = () => {
  const [value, setValue] = useState({
    data: [{ name: '', address: '', contact: '', college: '' }],
    view: 'form',
    dataIndex: -1,
  })

  const handleData = (inputData) => {
    console.log(' We Handled Person', inputData)
    const tempValue = { ...value }
    tempValue.dataIndex >= 0
      ? (tempValue.data[tempValue.dataIndex] = inputData)
      : tempValue.data.push(inputData)
    tempValue.view = 'data'
    tempValue.dataIndex = -1
    setValue(tempValue)
  }

  const showForm = () => {
    const tempValue = { ...value }
    tempValue.view = 'form'
    setValue(tempValue)
  }

  const handleUpdate = (index) => {
    const tempValue = { ...value }
    tempValue.view = 'form'
    tempValue.dataIndex = index
    setValue(tempValue)
  }

  const entryData = { name: '', address: '', contact: '', college: '' }
  const { data, view, dataIndex } = { ...value }

  return view === 'data' ? (
    <ShowData onSubmit={handleUpdate} onClick={showForm} data={data} />
  ) : (
    <FormData
      entryData={dataIndex >= 0 ? data[dataIndex] : entryData}
      onSubmit={handleData}
      edit={dataIndex >= 0}
    />
  )
}

export default MainComponent
