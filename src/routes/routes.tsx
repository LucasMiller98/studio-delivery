import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Loading } from '../pages/Loading'
import { Login } from '../pages/Login';
import { Register } from '../pages/register'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Loading} />
        <Route path='/login' component={Login} />
        <Route path='/cadastre-se' component={Register} />
      </Switch>
    </Router>
  )
}