import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
   
  } from "@react-firebase/auth";

const AuthRoute = ({component: Component ,...rest}) => {
    const user=useSelector((state)=>state.user)
    console.log(user.authenticated)
    
    return(
        <FirebaseAuthConsumer>
            {({isSignedIn})=>{
            
             return(<Route {...rest} render={(props) => {
          
           
            
            if(isSignedIn|user.authenticated){
                return <Component {...props} />

            }else{
                return <Redirect to={`/Signin`} />
            }
             
           
            
            
            
                
           
                
            
                
            
    
        }} />);
    }
        }
        </FirebaseAuthConsumer>
        
       )
}

export default AuthRoute 