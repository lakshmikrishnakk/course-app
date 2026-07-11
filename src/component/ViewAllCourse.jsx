import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllCourse = () => {
    const [data,changeData] = useState([])
const fectchData = () => {
    axios.get(" https://host-demo-app.onrender.com/api/courses").then(
        (Response) => {
            changeData(Response.data)
        }
    ).catch()
}
useEffect(
    ()=>
    {
        fectchData()
    },[]
)
  return (
    <div>
        <NavigationBar/>
         <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Mode</th>
                        <th scope="col">Trainer</th>
                        <th scope="col">Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value,index) => {
                        return(
                             <tr>
                                    <th scope="row">{value.course_name}</th>
                              7      <td>{value.duration}</td>
                                    <td>{value.fee}</td>
                                    <td>{value.mode}</td>
                                    <td>{value.trainer}</td>
                                    <td>{value.createf}</td>
                                    
                                  
                                </tr>
                        )}
                    )}
                    
                </tbody>
            </table>



    </div>
  )
}

export default ViewAllCourse