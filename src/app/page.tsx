'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import LoadingScreen from './components/loadingScreen'
import { gsap } from 'gsap'
import HomeSection from './components/home/homeSection'
import About from './components/about/about'
import Navbar from './components/header/navbar'
import Showcase from './components/showcase/showcase'
export default function Home() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0.25,
          ease: 'power3.out',
        })
      }
    }
    window.addEventListener('mousemove', moveCursor)

    const growTargets = document.querySelectorAll('.cursor-grow')
    const handleEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { width: 90, height: 90, duration: 0.2, ease: 'power3.out' })
      }
    }
    const handleLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { width: 40, height: 40, duration: 0.2, ease: 'power3.out' })
      }
    }
    growTargets.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      growTargets.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen  bg-gray-100 cursor-none">

      <div
        ref={cursorRef}
        style={{
          pointerEvents: 'none',
          width: 40,
          height: 40,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          background: 'rgba(209,213,219,0.6)',
          zIndex: 99999,
          mixBlendMode: 'difference',
          willChange: 'width, height, transform',
        }}
      />
      {!isLoadingComplete && <LoadingScreen onComplete={() => setIsLoadingComplete(true)} />}
      {/* Main content */}
      <div
        className={`w-full ${isLoadingComplete ? 'block' : 'hidden'
          }`}
      >
        <Navbar />
        <HomeSection key={isLoadingComplete ? 'loaded' : 'loading'} />
        <div className="-mt-0">
          <About key={isLoadingComplete ? 'about-loaded' : 'about-loading'} />
        </div>
        <div className="-mt-0">
          <Showcase key={isLoadingComplete ? 'showcase-loaded' : 'showcase-loading'} />
        </div>
        <div className='bg-gray-100 h-[10000px]'>

        </div>
      </div>
    </div>
  )
}
