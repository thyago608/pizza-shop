import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { router } from '.'
import './global.css'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
