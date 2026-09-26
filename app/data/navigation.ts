export interface NavItem {
  label: string
  to: string
}

export const primaryNav: NavItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Experience', to: '/experience' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const secondaryNav: NavItem[] = [
  { label: 'Stack', to: '/stack' },
]

export const allNav: NavItem[] = [
  ...primaryNav.slice(0, 2),
  { label: 'Stack', to: '/stack' },
  ...primaryNav.slice(2),
]
