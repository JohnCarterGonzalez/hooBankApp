import React from 'react'
import styles from './style.js';

// Components
import Business from './components/Business';
import Button from './components/Button';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import CTA from './components/CTA';
import ClientSection from './components/ClientSection';
import FeedBackCard from './components/FeedBackCard';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> 
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          < Business/>
          < Billing />
          < CardDeal />
          < Testimonials />
          < ClientSection />
          < CTA />
          < Footer />
        </div>
      </div>

    </div>
  );

export default App
