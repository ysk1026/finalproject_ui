import React from 'react'
import { Menu, Dashboard, Review, ReviewList} from '../components'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Checkout } from '../container'
import { Home } from './Home'
const Main = () => <>
    <BrowserRouter>
        <Switch>
            <Route>
                <Route exact path="/" component={Menu}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signin" component={Review}/>
                <Route path="/reviewlist" component={ReviewList}/>
                <Route path="/checkout" component={Checkout}/>       
            </Route>
        </Switch>
    </BrowserRouter>
    
</>

export default Main