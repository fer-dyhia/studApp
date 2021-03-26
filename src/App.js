import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'firebase/auth'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

import firebase from 'firebase'
import { getSuggestedUsers } from './Redux/Actions/dataAction'
import './App.css'
import dashboard from './dashboard/dash'
import Signin from './dashboard/SignIn'
import Signup from './dashboard/Form'
import filActualite from './filActualite/filActualite'
import iterfaceUser from './interfaceUser/interfaceUser'
import messagerie from './messagerie/messagerie'
import profilUser from './profilUser/profilUser'
import ForgotPass from './dashboard/ForgotPass'
import Card from './filActualite/Card'
import Invitation from './filActualite/invitation'
import EditProfil from './profilUser/components/Editprofil'
import friends from './profilUser/components/friend'
import AuthRoute from "./util/AuthRoute"

const config = require('./config')

//redux

const App = () => {
    return (
        <FirebaseAuthProvider firebase={firebase} {...config}>
            {
                <Router>
                    <Switch>
                        <Route path='/' exact component={dashboard} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
                        <AuthRoute path='/filActualite' component={filActualite} />
                        <AuthRoute path='/iterfaceUser' component={iterfaceUser} />
                        <AuthRoute path='/messagerie' component={messagerie} />
                        <AuthRoute path='/profilUser/:username' component={profilUser} />
                        <AuthRoute path='/forgotPass' component={ForgotPass} />
                        <AuthRoute path='/card' component={Card} />
                        <AuthRoute path='/Invitation' component={Invitation} />
                        <AuthRoute path='/EditProfil' component={EditProfil} />
                        <AuthRoute path='/friends' component={friends} />
                    </Switch>
                </Router>
            }
        </FirebaseAuthProvider>
    )
}

export default App
