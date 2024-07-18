import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho do AppLayout</h1>
      <Outlet />
    </div>
  )
}
