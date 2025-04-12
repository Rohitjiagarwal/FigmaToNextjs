import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';

export default function Home() {
  return (
    <div className="maincontainer"> 
      <section className='contactform'>
        <ContactForm />
        <GetInTouch />
      </section>
     
    </div>
  );
}