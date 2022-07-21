import Link from 'next/link'
import FoodielandLogo from '../../atoms/FoodielandLogo'

import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='footer__header'>
        <div className='footer__headerInfo'>
          <FoodielandLogo />
          <p className='footer__text'>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
        </div>
        <div className='footer__links'>
          <Link href='/recipes' className='footer__link'>Recipes</Link>
          <Link href='/blog' className='footer__link'>Blog</Link>
          <Link href='/contact' className='footer__link' >Contact</Link>
          <Link href='/about' className='footer__link'>About us</Link>
        </div>

        {/* Navigation */}
      </div>
      <hr className='footer__horizontalRule'></hr>
      <div className='footer__socialsContainer'>
        <p className='footer__copyright'> &copy;2020 Flowbase.Powered by <span className='footer__copyrightWebflow'>Webflow</span></p>
        {/* <SocialsMenu /> */}
      </div>
    </footer>
  )
}
export default Footer