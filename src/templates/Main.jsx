import React from 'react'
import { Menu, Dashboard, SignIn, ReviewUpdate} from '../components'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Checkout } from '../container'
const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route>
                <Route exact path="/" component={Menu}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signin" component={SignIn}/>     
                <Route path="/reviewupdate" component={ReviewUpdate}/>
                <Route path="/checkout" component={Checkout}/>       
            </Route>
        </Switch>
    </BrowserRouter>
</>

export default Main