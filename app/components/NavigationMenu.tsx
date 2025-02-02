"use client"

import "./styles/menu.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Play } from "next/font/google"

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/", label: "Work" },
  { path: "/", label: "About" },
  { path: "/", label: "Contact" },
  { path: "/", label: "Lab" },
]

export default function NavigationMenu() {
  const container = useRef(null)
  const tl = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "power4.inOut"
      }).to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75
      })
  }, { scope: container })


  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [isMenuOpen])

  function toggleMenu() {
    setIsMenuOpen(prev => !prev)
  }
  return <div ref={container} className="menu-container">
    <div className="menu-bar">
      <div className="menu-logo">
        <Link href="/">HRISHIK</Link>
      </div>
      <div className="menu-open" onClick={toggleMenu}>
        <p>Menu</p>
      </div>
    </div>
    <div className="menu-overlay">
      <div className="menu-overlay-bar">
        <div className="menu-logo">
          <Link href="/">HRISHIK</Link>
        </div>
        <div className="menu-close" onClick={toggleMenu}>
          <p>Close</p>
        </div>
      </div>
      <div className="menu-close-icon">
        <p>&#x2715;</p>
      </div>
      <div className="menu-copy">
        <div className="menu-links">
          {menuLinks.map((link, index) => (
            <div className="menu-link-item" key={index}>
              <div className="menu-link-item-holder" onClick={toggleMenu}>
                <Link href={link.path} className="menu-link">
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-info">
          <div className="menu-info-col">
            <a href="#">Sample &#8599</a>
            <a href="#">Sample &#8599</a>
            <a href="#">Sample &#8599</a>
            <a href="#">Sample &#8599</a>
          </div>
          <div className="menu-info-col">
            <p>sample</p>
            <p>1234567899</p>
          </div>
        </div>
      </div>
      <div className="menu-preview">
        <p>Sample </p>
      </div>
    </div>
  </div>
}
