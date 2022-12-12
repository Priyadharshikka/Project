import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetEx2() {
    const [posts,setPosts]=useState([])
     
    useEffect(()=>{
        axios.get("db.json")
        .then((res)=>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(error=>console.log(error))
    })
  return (
    <div>
      <table><tr><td style={{border: '1px solid',width: '100px',borderCollapse:'collapse'}}>id</td><td style={{border: '1px solid' ,width: '700px',borderCollapse:'collapse'}}>Title</td></tr></table>
      {posts.map
      ((val) => (<table key={val.id}>
      <tbody>
      <tr>
      <td style={{border: '1px solid',width: '100px',borderCollapse:'collapse'}}>{val.id}</td>
      <td style={{border: '1px solid' ,width: '1000px',}}>{val.name}</td>
      </tr>
      </tbody>
      </table>
      ))}   
      
      </div>
  )
}
