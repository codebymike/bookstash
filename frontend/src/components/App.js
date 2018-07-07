import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import BookView from './BookView'


const App = () => (
  <Switch>
    <Route exact path='/' component={Main}/>
    <Route path='/book/:id' component={BookView}/>
  </Switch>
)

export default App
