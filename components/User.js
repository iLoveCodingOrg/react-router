import React from 'react'

export default function User (props){
  console.log(props)
  return(
    <div className="bordered">
      This is a user with the name &nbsp;
      {props.match.params.user}
    </div>
  )
}