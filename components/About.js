import React from 'react'
import { Route } from 'react-router-dom'
import User from './User'

export default function About (props){
  return(
    <div className="bordered">
      About Page
      <Route path={`${props.match.url}/:user`} component={User} />
    </div>
  )
}