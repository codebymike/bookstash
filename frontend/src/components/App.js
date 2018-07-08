import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Book from '../containers/Book'


const App = () => (
  <Switch>
    <Route exact path='/' component={Main}/>
    <Route path='/book/:id' component={Book}/>
  </Switch>
)

export default App
