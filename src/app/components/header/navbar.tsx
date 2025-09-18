'use client'
import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggle = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuWidth, setMenuWidth] = useState<number | null>(null)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleMenuItemClick = (sectionId: string) => {
    handleToggle()
    setTimeout(() => {
      const targetSection = document.querySelector(`[data-section="${sectionId}"]`)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 200)
  }

  const handleToggle = () => {
    if (!toggle.current || !menuRef.current) return
    // Get button width for dropdown
    if (!isMenuOpen) {
      const width = toggle.current.offsetWidth
      setMenuWidth(width)
    }
    const tl = gsap.timeline()
    if (!isMenuOpen) {
      // Opening dropdown
      tl.set(menuRef.current, {
        display: 'block',
        height: 0,
        opacity: 0,
        y: 0,
      })
        .to(menuRef.current, {
          height: 'auto',
          opacity: 1,
          y: 10,
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => setIsMenuOpen(true)
        })
    } else {
      // Closing dropdown
      tl.to(menuRef.current, {
        height: 0,
        opacity: 0,
        y: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => setIsMenuOpen(false)
      })
    }
  }

  return (
    <div className=" w-full flex items-center justify-end py-5 fixed top-0 right-0  z-[11000] cursor-none">
      <div className="relative w-full md:w-fit flex mx-5 overflow-visible z-[40] rounded-2xl ">
        {/* Button Container */}
        <div className="relative h-[50px] w-full " ref={toggle} >
          <div
            className="bg-[#212121]  lg:w-[26rem] md:w-[23rem] w-full h-full flex items-center justify-center text-white  rounded-2xl"
            onClick={handleToggle}
          >
            <p>Menu</p>
          </div>
        </div>
        {/* Dropdown Menu */}
        <div
          ref={menuRef}
          className="absolute left-0 top-full mt-2 backdrop-blur bg-[#212121]/90 rounded-2xl shadow-lg overflow-hidden"
          style={{
            width: menuWidth ? `${menuWidth}px` : undefined,
            display: isMenuOpen ? 'block' : 'none',
            zIndex: 9999,
          }}
        >
          <div className="text-white text-center space-y-4 py-6 px-7">
            <div
              onClick={() => handleMenuItemClick('about')}
              className="text-2xl font-bold hover:text-gray-300  transition-colors border-b-2 w-full pb-3"
            >
              About Me
            </div>
            <div
              onClick={() => handleMenuItemClick('projects')}
              className="text-2xl font-bold hover:text-gray-300  transition-colors border-b-2 w-full pb-3"
            >
              Projects
            </div>
            <div
              onClick={() => handleMenuItemClick('contact')}
              className="text-2xl font-bold hover:text-gray-300  transition-colors border-b-2 w-full pb-3"
            >
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
