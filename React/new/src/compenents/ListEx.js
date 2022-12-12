import React from 'react'

export default function ListEx() {
  
    const cars = [{model:"000",id:1},
                  {model:"thnj",id:2},
                  {model:"Breeza",id:3},
                  {model:"scorpio",id:4}];
    return (
         <h1>{cars.map((val)=><li key={val.id}>{val.model}</li>)}</h1>
    )
  }
