import { Fragment } from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'

import styles from './styles.module.scss'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}
export default Layout