import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
   
  } from "@react-firebase/auth";
import NotVerification from '../dashboard/NotVerfication';

const AuthRoute = ({component: Component ,...rest}) => {
    const User=useSelector((state)=>state.user)
    console.log(User.authenticated)
    
    return(
        <FirebaseAuthConsumer>
            {({isSignedIn,user})=>{
             return(<Route {...rest} render={(props) => {
            if(isSignedIn|User.authenticated){
                if(User.credentials.verified){
                    return <Component {...props} />
                }else{
                    
                    if(user){
                        if(user.emailVerified){
                        return <Component {...props} />
    
                         }else {
                          return <NotVerification/>
                        }
                    }
                     else {
                          return <NotVerification/>
                     }
                    

                }
                
               

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