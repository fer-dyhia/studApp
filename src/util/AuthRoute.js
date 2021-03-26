import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
   
  } from "@react-firebase/auth";

const AuthRoute = ({component: Component ,...rest}) => {
    
    return(
        <FirebaseAuthConsumer>
            {({isSignedIn})=>{
            
             return(<Route {...rest} render={(props) => {
          
           
            
            if(isSignedIn){
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