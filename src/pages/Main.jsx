import React from 'react'
import { Menu, Review, SignIn, ReviewUpdate } from '../components'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route>
                <Route exact path="/" component={Menu}/>
                <Route path="/review" component={Review}/>
                <Route path="/signin" component={SignIn}/>     
                <Route path="/reviewupdate" component={ReviewUpdate}/>     
            </Route>
        </Switch>
    </BrowserRouter>
</>

export default Main