import { NavLink as Link, LinkProps } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  return (
    <Link
      className={({ isActive }) =>
        `flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground ${isActive && 'text-black'}`
      }
      {...props}
    />
  )
}
