import React from 'react'
import {Review} from '../components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route>
                <Route exact path="/" component={Review}/>
            </Route>
        </Switch>
    </BrowserRouter>
</>

export default Main