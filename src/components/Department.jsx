import React from 'react'
import { useParams } from 'react-router-dom';

function Department() {
const params = useParams()
console.log(params)

  return (
    <div>
      <h1>Department Page Goes Here</h1>
    </div>
  )
}

export default Department;