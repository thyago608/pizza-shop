import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <div className="bg-foreground">
      <Helmet title="Dashboard" />
      <h1>dashboard</h1>
    </div>
  )
}
