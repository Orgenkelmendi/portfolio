import React, { useState, useRef } from 'react';
import SocialLinks from './components/SocialLinks.js';
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import TimelineComponent from './components/Timeline.js';
import TechStack from './components/TechStack.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import emailjs from "@emailjs/browser";
import './App.css';
import { Cross as Hamburger } from 'hamburger-react'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("")
  const form = useRef();

  const handleToggle = (toggled) => {
    setIsOpen(toggled);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzl9i0m",
        "template_axh8pye",
        form.current,
        "nOlLJyYlfLVsL3q9h"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // alert("Email sent successfully!");
          setResult("Email sent. Thank you.")
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          // alert("Failed to send email. Please try again.");
          setResult('Failed to send. Please try again.')
        }
      );

    e.target.reset();
  };

  return (
    <div className="App">
      <SocialLinks />
      <Header isOpen={isOpen} />
      <div id='hamburger'>
        <Hamburger toggled={isOpen} toggle={handleToggle} direction='right' size={20} color='white' />
      </div>
      <Landing />
      <TimelineComponent />
      <TechStack />
      <Projects />
      <Contact ref={form} onSubmit={sendEmail} result={result} />
      <Footer />
    </div>
  );
}

export default App;
