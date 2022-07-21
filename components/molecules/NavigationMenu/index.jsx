import Link from 'next/link';

import styles from './styles.module.scss';

const menuItems = [
  {
    page: 'Home',
    href: '/'
  },
  {
    page: 'Recipes',
    href: '/recipes'
  },
  {
    page: 'Blog',
    href: '/blog'
  },
  {
    page: 'About us',
    href: '/about'
  },
  {
    page: 'Contact',
    href: '/contact'
  }
];

const NavigationMenu = ({
  isMobile
}) => {

  return (
    <ul
      className={`${styles.navigationMenu}
      ${isMobile ? styles['navigationMenu--mobile'] : ''} `}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${styles.navigationMenu__item} `}
        >
          <Link href={`${item.href}`}><a className={styles.navigationMenu__link}>{item.page}</a></Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
