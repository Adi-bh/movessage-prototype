// HomePage.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css'; // Use the existing styles if applicable

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    // Locomotive Scroll Setup
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });

    // GSAP Animations
    gsap.to('#page', {
      scrollTrigger: {
        trigger: '#page',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scroller: '#main',
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div>
      <header id="nav">
        <h3>movessage.</h3>
      </header>
      <main id="main">
        <section id="page">
          <div id="loop">
            <h1>
              <b>MOVESSAGE</b> is an<b><i></i></b> <span>AI</span> based <span><i>platform.</i></span>
            </h1>
            <h1>
              <b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span>
            </h1>
            <h1>
              <b>MOVESSAGE</b> is an <b><i></i></b> <span>AI</span> based <span><i>platform.</i></span>
            </h1>
          </div>
          <h3>
            <br /> AI based platform for creating smart contracts in the <br /> Move language.
          </h3>
          <h4>...SCROLL TO READ</h4>
          <canvas></canvas>
        </section>
        <section id="page1">
          <div id="right-text">
            <h3>CYBERFICTION / KEY WORD</h3>
            <h1>
              HAVE FUN
              <br />
              LET'S PLAY
              <br />
              JUST BE TOGETHER
            </h1>
          </div>
          <div id="left-text">
            <h1>
              MAKE A STORY
              <br />
              TAKE A CHANCE
              <br />
              BUILD AND OWNED
            </h1>
            <h3>..AND MAINTAIN GOOD HUMANITY</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
