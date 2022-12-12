import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{console.log(res.data)
        this.setState({posts:res.data})})
        .catch(error=>console.log(error))
    }
  render() {
    const {posts}=this.state
    return (
      <div>
      <table><tr><td style={{border: '1px solid',width: '100px',borderCollapse:'collapse'}}>id</td><td style={{border: '1px solid' ,width: '700px',borderCollapse:'collapse'}}>Title</td></tr></table>
      <p>{posts.map
      ((hy) => (<table key={hy.id}>
      <tbody>
      <tr>
      <td style={{border: '1px solid',width: '100px',borderCollapse:'collapse'}}>{hy.id}</td>
      <td style={{border: '1px solid' ,width: '1000px',}}>{hy.title}</td>
      </tr>
      </tbody>
      </table>
      ))}
      </p>
      </div>
    )

  }
}
