import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <h1>Cabeçado do AuthLayout</h1>
      <Outlet />
    </div>
  )
}
