import { Fragment } from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'

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