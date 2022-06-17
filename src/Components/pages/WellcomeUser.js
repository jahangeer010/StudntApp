import React, { useEffect } from 'react'
import { getData } from '../../config/firebase/firebasemethods'
import { useParams } from 'react-router-dom'



function WellcomeUser(props) {
  const params=useParams();
  useEffect(()=>{
    if(params.id){
      console.log(getData)
    }
  },[])

  return (
    <div>Wellcome  and your password is </div>
  )
}

export default WellcomeUser