import Instagram from '../../atoms/InstagramIcon'
import Facebook from '../../atoms/FacebookIcon'
import Twitter from '../../atoms/TwitterIcon'

import styles from './styles.module.scss'

const SocialsMenu = () => {
  return (
    <div className={styles.socialsMenu}>
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  )
}
export default SocialsMenu