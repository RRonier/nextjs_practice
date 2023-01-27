import styles from '@/components/layouts/sidebar/SideBarLayout.module.css'
import Link from 'next/link'

export interface SideBarLayoutProps {
  children: React.ReactNode
}

const SideBarLayout: React.FC<SideBarLayoutProps> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
export default SideBarLayout
