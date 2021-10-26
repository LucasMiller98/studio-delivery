import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Loading } from '../pages/Loading'
import { Login } from '../pages/Login';
import { Register } from '../pages/register'
import { RegisterSettingAccount } from '../pages/SettingAccount'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Loading} />
        <Route path='/login' component={Login} />
        <Route exact path='/cadastre-se' component={Register} />
        <Route path='/cadastre-se/account' component={RegisterSettingAccount} />
      </Switch>
    </Router>
  )
}