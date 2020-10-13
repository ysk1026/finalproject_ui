import React from 'react'
import { Menu, Review, SignIn } from '../components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route>
                <Route exact path="/" component={Menu}/>
                <Route path="/review" component={Review}/>
                <Route path="/signin" component={SignIn}/>                  
            </Route>
        </Switch>
    </BrowserRouter>
</>

export default Main