import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home';
import { Loading } from '../pages/Loading'
import { Login } from '../pages/Login';
import { Register } from '../pages/register'
import { RegisterSettingAccount } from '../pages/SettingAccount'

export function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastre-se' element={<Register />} />
        <Route path='/cadastre-se/account' element={<RegisterSettingAccount />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}