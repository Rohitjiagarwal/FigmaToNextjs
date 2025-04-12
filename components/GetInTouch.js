import React from 'react';
import styles from '../styles/GetInTouch.module.css';

const ContactFormSection = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.leftSide}>
        <div className={styles.leftSideContent}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subheading}>
          Facilisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper tempus mattis ac tristique gravida ornare faucibus suspendisse.
        </p>
        </div>

        <form className={styles.form}>
        <div className={styles.formGroup}>
  <label className={styles.label}>Your Name</label>
  <input type="text" className={styles.InputName} placeholder="Your Name" />
</div>

          
          <div className={styles.formGroup}>
          <label  className={styles.label}>
            Your Email
            <input type="email" className={styles.InputName}  placeholder="Email" />
          </label>
          </div>
         
          <div className={styles.formGroupp}>
          <label  className={styles.label}>
            Your Message
            <textarea className={styles.textareaMessage} placeholder="Writing your message here..."></textarea>
          </label>
          </div>

          <button className={styles.buttonname} type="submit">Send Message</button>
        </form>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.imageBox}></div>

        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
          <img src="/Icon.svg" alt="Phone" className={styles.icon} />
            <div>
              <h4 className={styles.phoneNumber}>Phone Number</h4>
              <p className={styles.content}>+123 456 789 101</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
          <img src="/Icon (1).svg" alt="Phone" className={styles.icon} />
            <div>
              <h4 className={styles.phoneNumber}>Business Hours</h4>
              <p className={styles.content}>Monday – Friday / 8AM to 5PM</p>
            </div>
          </div>
        </div>

        <div className={styles.socials}>
          <p className={styles.Follow}>Follow Us:</p>
          <div className={styles.icons}>
          <img src="/Icon 1.svg" alt="Phone" className={styles.icon} />
          <img src="/Icon 2.svg" alt="Phone" className={styles.icon} />
          <img src="/Icon 3.svg" alt="Phone" className={styles.icon} />
          <img src="/Icon 4.svg" alt="Phone" className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
