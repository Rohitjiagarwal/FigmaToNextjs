import React from 'react'
import Header from './Header'
import ContactInfo from './ContactInfo'
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.contactform}> 
      <Header />
      <div className={styles.contactinfoWrapper}>
        <ContactInfo />
      </div>
    </div>
  )
}

export default ContactForm