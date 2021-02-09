import { useEffect, useState, useRef } from "react";
import { projectsList } from "../components/data";
import Head from "next/head";
import IntroOverlay from "../components/introOverlay";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Parallax from 'parallax-js';
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import ReactGA from "react-ga";
require("@south-paw/typeface-minecraft");
export const siteTitle = "SeekYML - VFX/GFX"
export const siteDescription = "Java Programmer, Designer"
import React from 'react';
import ParticleField from 'react-particles-webgl';
export default function Home() {
  const config = {
    showCube: false,
    dimension: '3D',
    velocity: 0.7,
    boundaryType: 'passthru',
    antialias: true,
    direction: {
      xMin: -1,
      xMax: -1,
      yMin: 1,
      yMax: 1,
      zMin: -1,
      zMax: -1
    },
    lines: {
      colorMode: 'rainbow',
      color: '#351CCB',
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 150,
      visible: false
    },
    particles: {
      colorMode: 'rainbow',
      color: '#ffffff',
      transparency: 1,
      shape: 'square',
      boundingBox: 'canvas',
      count: 218,
      minSize: 10,
      maxSize: 10,
      visible: true
    },
    cameraControls: {
      enabled: false,
      enableDamping: false,
      dampingFactor: 0.2,
      enableZoom: false,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: false
    }
  }
  const [animationComplete, setAnimationComplete] = useState(false);
  const projectsRef = useRef(null);
  const scrollRef = useRef(null);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "scroll";
  };
  const executeScroll = () => projectsRef.current.scrollIntoView();

  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    // Inner Page height for mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let projects = gsap.utils.toArray(".project-row .project");
    let mediaQuery = window.matchMedia("(min-width: 167px)");

    const homeAnimation = (animation) => {
      tl
        .to(".ball", {
          duration: 1,
          scale: 35,
          ease: "power3.out",
          opacity:100,
          onComplete: animation,
        })
        .from(".after-animation", {
          duration: 0.8,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".title", {
          duration: 0.6,
          y: 100,
          delay: 0.2,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".peep-image", {
          duration: 0.6,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".job-title", {
          duration: 0.6,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(".scroll-indicator", {
          duration: 0.6,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        });

      gsap.from(".project-row", {
        scrollTrigger: {
          trigger: ".project-container",
          start: "top center",
          end: "top top",
          scrub: 1,
        },
        x: 500,
        opacity: 0,
        duration: 2,
      });

      if (mediaQuery.matches) {
        gsap.to(projects, {
          xPercent: -100 * (projects.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".project-container",
            pin: true,
            start: "top top",
            scrub: 1,
            snap: {
              snapTo: 1 / (projects.length - 1),
              duration: { min: 0.2, max: 1 },
              delay: 0,
            },
            end: () =>
              "+=" + document.querySelector(".project-row").offsetHeight,
          },
        });
        gsap.to("progress", {
          value: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".project-container",
            start: "center center",
            scrub: 0.3,
          },
        });
      }

      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      });

      tlFooter
        .from("footer h2", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        })
        .from("footer .footer-links", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        });
    };

    homeAnimation(completeAnimation);
  }, []);
  return (
  <div>
    <div className="container" ref={scrollRef}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="SeekYML's Portfolio. Literally the CEO of Java..."
        ></meta>
        <title>Seek / Java Programmer / Designer</title>
        <link rel="icon" href="https://raw.githubusercontent.com/SeekYML/Assets/main/websiteassets/favicon.ico" />

<title>Seek / Java Developer / Designer</title>
<meta name="title" content="Seek / Java Developer / Designer"></meta>
<meta name="description" content="Portfolio / Resources"></meta>

<meta name="twitter:card" content="summary" key="twcard" />
<meta name="twitter:creator" content="yo" key="twhandle" />

<meta property="og:url" content="https://www.seek.ml/" key="ogurl" />
<meta property="og:image" content="https://i.ibb.co/kKsgXkV/banner.png" key="ogimage" />
<meta property="og:site_name" content="Seek's Portfolio" key="ogsitename" />
<meta property="og:title" content="Seek / Java Developer / Designer" key="ogtitle" />
<meta property="og:description" content="View Seek's latest resources and projects." key="ogdesc" />
      </Head>
      {animationComplete === false && <IntroOverlay />}
      <div className="after-animation">
        <nav className="home-nav">
          <div className="space-between">
            <div className="logo">seek.</div>
            <ul className="nav-list">
              <li>
                <motion.a
                  href="https://discord.gg/PaHypdH7aA"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faDiscord} size="2x" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/SeekYML"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.twitter.com/CeoOfJava"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </motion.a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="main-home">
          <div className="cta"> 
            <h1 className="title">
              Hey, i'm <span role="img" aria-label="wave" id="wave">👋</span>       
              <span className="playful active-gradient cool-title"><br/>seek. </span></h1>
          <div id="scene">
          <div data-depth= "0.4"><img src="/images/Seek2.png"alt="Seek"className="peep-image"/></div>
          <div data-depth= "0.3"><img src="/images/Seek3.png"alt="Seek"className="peep-image"/></div>
          <div data-depth= "0.3"><img src="/images/Seek4.png"alt="Seek"className="peep-image"/></div>
          <div data-depth= "0.5"><img src="/images/Seek5.png"alt="Seek"className="peep-image"/></div>
          <div data-depth="1.2"><img src="/images/Seek6.png"alt="Seek"className="peep-image"/></div>
          <div data-depth="1.1"><img src="/images/Seek9.png"alt="Seek"className="peep-image"/></div>
          <div data-depth="0.2"><img src="/images/Seek11.png"alt="Seek"className="peep-image"/></div>
          <div data-depth="0.6"><img src="/images/Seek.png"alt="Seek"className="peep-image"/></div>
          </div>
          </div>

          <h3 className="job-title">
            <div className= "logo">
              Java Developer / Designer
          </div>
          </h3>
          <div className="scroll-indicator" onClick={executeScroll}>
            <p className= "projecthover">Projects</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </main>
        <div className="project-container" ref={projectsRef}>
        <ParticleField config={config} />
          <div className="project-row">
            {projectsList.map(
              ({ name, description, image, link, page, tools, index }) => (
                <div className="project" key={index}>
                  <img src={image} alt={name} />
                  <div className="project-info">
                    <h3>{name}</h3>
                    {description.split("\n").map((str) => (
                      <p>{str}</p>
                    ))}
                    <h4>Tools used:</h4>
                    <ul className="tools-list">
                      {tools.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <motion.div className="project-btns">
                      <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.button className="project-btn">
                          Download
                        </motion.button>
                      </motion.a>
                      <motion.a
                        href={page}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.button className="project-btn">
                          Questions?
                        </motion.button>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              )
            )}
          </div>
          <progress max="100" value="0"></progress>
        </div>
        <footer>
          <h2>Need Assistance? Contact below.</h2>
          <ul className="footer-links">
            <li>
              <motion.a
                href="https://discord.gg/PaHypdH7aA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://github.com/SeekYML"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.twitter.com/CeoOfJava"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </motion.a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
  );
}
