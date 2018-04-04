import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/Home'
import About from '../components/About'
import './index.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)