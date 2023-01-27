import styles from '@/components/layouts/primary/PrimaryLayout.module.css'
import Head from 'next/head'

export interface PrimaryLayoutProps {
  children: React.ReactNode
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default PrimaryLayout
