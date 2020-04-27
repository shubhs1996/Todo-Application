import React from 'react'
import {Link} from 'react-router-dom'
import SignedOutLink from './SignedOutLink'
import SignedInLink from './SignedInLink'
import {connect} from 'react-redux'

const navbar=(props)=>{
const {auth}=props
  const link =auth.uid?<SignedInLink/>:<SignedOutLink/>;
   return(
       <nav className="nav-wrapper grey darken-1">
         <div className="container">
           <Link to="/" className="brand-logo">MarioPlan</Link>
           {link}
         </div>
       
       </nav>
   )

}


const mapStateToProps=(state)=>{

return {
  auth:state.firebase.auth,
}
}

export default connect(mapStateToProps)(navbar);