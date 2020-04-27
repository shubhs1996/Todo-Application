import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {signOut} from '../../store/action/authAction'


const SignedInLink=(props)=>{

    return(
      <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><a  onClick={props.signOut}>Log out</a></li>
        <li><NavLink to="" className="btn btn-floating pink lighten-1">{props.initials}</NavLink></li>
      </ul>
    )


}

const mapStateToProps=(state)=>{
 
   return{
     initials:state.firebase.profile.initials,
   }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}
 
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    {collection:'users'}
  ])
)
(SignedInLink);