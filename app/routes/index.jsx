import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from '../components/Home'
import Main from '../components/Main'
import PromptContainer from '../components/PromptContainer'
import BattleContainer from '../components/BattleContainer'
import PopularLanguage from '../components/PopularLanguage'

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home } />
      <Route path="playerOne" header="Player One" component={ PromptContainer } />
      <Route path="playerTwo/:playerOne" header="Player Two" component={ PromptContainer } />
      <Route path="battle" header="Compare Players" component={ BattleContainer } />
    </Route>
    <Route path="/popular" component={ PopularLanguage } />
  </Router>
)
