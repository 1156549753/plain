import React from 'react'
import { Route, Switch} from 'react-router-dom'
import loadable from '@loadable/component'
const Login = loadable(()=>import('../views/base/Login'))
export default function Router(){
    return (
        <Switch>
                <Route exact path="/login" component={Login} />
        </Switch>
    )
}