import React from 'react';
import AppNavbar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import myImage from './components/net.jpg';
import myImage2 from './components/engineer.jpg';
import myImage3 from './components/desk.png';
import CertificationCard from './components/CertificationCard';
import ContactForm from './ContactForm';
import EstimateCalculator from './EstimateCalculator';


function App() {
    return (
        <>
      <AppNavbar />
      <div className="container mt-4">
        <h1>Welcome to Electromagnet</h1>
        <p>Your trusted provider in electromagnetic testing</p>
        <div className="card text-bg-dark" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '400px' }}>
          <Card.Img 
            src={myImage} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            alt="Card image" 
          />
          <Card.ImgOverlay 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            <Card.Text 
              style={{ 
                fontSize: '1.2rem', 
                color: 'white', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                padding: '10px', 
                borderRadius: '5px', 
                width: '100%' 
              }}
            >
              Electronic safety and interference certifications, often encompassing EMC (Electromagnetic Compatibility) and EMI (Electromagnetic Interference) testing, are crucial for ensuring products function reliably and safely in their intended electromagnetic environment, complying with regulations and standards. 
            </Card.Text>
          </Card.ImgOverlay>
        </div>
        <div className="my-5"></div>
        <section id="about">
          <h2>About us</h2>
          <div className="my-5"></div>
          <p style={{ fontSize: '1.2rem' }}>
          We are a team of highly experienced electricalS engineers, who specialize in equipment certification testing. 
          Your equipment can be high complexity and low complexity products such as consumer or industrial tools e.g. toys, industrial instruments, consumer electronics, power distribution.
          In the case of certification failure, we provide a detailed report on the issues and suggest solutions that will help you pass the testing in the future.</p>
          <p>Our mission is to provide the best service to our customers and help them get their products certified. We want to be transparent with our customers and encourage you to take 
          advantage of our free online tool that will help you calculate certification testing costs even before you decide to reach out to us.</p>
          </section>
        <div className="my-5"></div>
        <section id="services">
          <h2>Certifications</h2>
        <div className="my-5"></div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '10px' }}>
          <CertificationCard
            certification={{
              title: 'FCC',
              body: 'Federal Communications Commission',
              link: 'https://www.fcc.gov/'
              }}
          />
          <CertificationCard
            certification={{
              title: 'CE',
              body: 'Conformité Européenne',
              link: 'https://www.ce-marking.org/'
            }}
          />
          <CertificationCard
            certification={{
              title: 'CSA',
              body: 'Canadian Standards Association',
              link: 'https://www.csagroup.org/'
            }}
          />
          <CertificationCard
            certification={{
              title: 'UKCA',
              body: 'United Kingdom Conformity Assessed',
              link: 'https://www.gov.uk/guidance/using-the-ukca-marking'
            }}
          />  
        </div>
        </section>
        <div className="my-5"></div>
        <section id="estimates">
          <h2>Estimates</h2>
        <div className="my-5"></div>
          <p style={{ fontSize: '1.2rem' }}>
          To help you understand the cost of our services, please fill in the below form to receive an estimate on the screen. Please note that the actual price will be confirmed upon a closer inspection of your equipment.</p>
          <EstimateCalculator/> 
          </section>
        <div className="my-5"></div>
        <section id="contact">
          <h2>Contact us</h2>
          <div className="my-5"></div>
            <p style={{ fontSize: '1.2rem' }}>
            If you have any questions please do not hesitate to contact our team via the contact form or by email <a href="mailto:info@electromagnet.com">info@electromagnet.com</a>. The price will be confirmed upon a closer inspection of your equipment.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <ContactForm />
            </div>
            <div style={{ flex: 1 }}>
              <img 
          src={myImage3} 
          alt="Desk" 
          style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </section>
        <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
          <p style={{ margin: 0, fontSize: '1rem' }}>© {new Date().getFullYear()} Electromagnet. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
       

export default App;
