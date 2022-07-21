import useWindowWidth from '../../../hooks/usePageWidth'
import Logo from '../../atoms/FoodielandLogo'

import NavigationMenu from '../../molecules/NavigationMenu'
import SocialsMenu from '../../molecules/SocialsMenu'

import styles from './styles.module.scss'

const Navbar = () => {
  const { isMobile } = useWindowWidth()

  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavigationMenu isMobile={isMobile} />
      {isMobile ? null : <SocialsMenu />}
    </nav>
  )
}
export default Navbar