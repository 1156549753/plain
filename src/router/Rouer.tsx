import React from 'react'
import { Route, Switch} from 'react-router-dom'
import loadable from '@loadable/component'
const Login = loadable(()=>import('../views/Login/Login'))
const Index = loadable(()=>import('../views/Index'))
export default function Router(){
    return (
        <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/login" component={Login} />
        </Switch>
    )
}