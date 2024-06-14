import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ViewDoc from './ViewDoc'


function Alldoc() {
  const base_url = 'https://docter-booking-backend.onrender.com/doctors'

  const [docData,setData] = useState([])

  const fetchData = async()=>{
    const response = await axios.get(base_url)
    console.log(response.data);
    setData(response.data)
  }
  console.log(docData);

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
    <ViewDoc docArray={docData}/>
    </div>
  )
}

export default Alldoc
