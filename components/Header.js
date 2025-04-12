import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            A-Crypto
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/" className='gradient-text' >Home</Link>
            </li>
            <li>
              <Link href="/about" className='gradient-text' >About Us</Link>
            </li>
            <li>
              <Link href="/contact" className='gradient-text' >Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className={styles.actions}>
          <Link href="/signin" className={styles.signInButton}>
            Sign In
          </Link>
          <Link href="/register" className={styles.registerButton}>
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}