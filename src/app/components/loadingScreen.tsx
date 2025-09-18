'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Gelasio } from 'next/font/google'

const gelasio = Gelasio({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

const nameList = Array(5).fill('Omar Ehab')

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const middleRef = useRef<HTMLDivElement>(null)
  const middleTextRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const finalTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      !topRef.current ||
      !middleRef.current ||
      !bottomRef.current ||
      !containerRef.current ||
      !middleTextRef.current
    )
      return

    const tl = gsap.timeline()

   
    const sampleP = middleTextRef.current.querySelector('p')
    if (!sampleP) return

    
    const getGapSize = () => {
      const width = window.innerWidth
      if (width < 640) return 16 // gap-4
      if (width < 768) return 32 // gap-8
      if (width < 1024) return 48 // gap-12
      if (width < 1280) return 64 // gap-16
      return 80 // gap-20
    }

    const gapSize = getGapSize()
    const pWidth = sampleP.offsetWidth + gapSize
    const screenCenter = window.innerWidth / 2
    const targetOffset = -(pWidth * 2 - screenCenter + pWidth / 2) 

    
    gsap.set(middleRef.current, { height: '0%', x: 0 })
    gsap.set([topRef.current, bottomRef.current], { opacity: 0, y: 100 })
    gsap.set(middleTextRef.current, { opacity: 0, y: 100 })

  
    const startInfiniteScroll = () => {
    
      gsap.to(topRef.current, {
        x: `-=${pWidth * 5}`, 
        duration: 3,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          
          gsap.set(topRef.current, { x: 0 })
        }
      })

     
      gsap.to(bottomRef.current, {
        x: `-=${pWidth * 5}`,
        duration: 3,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
       
          gsap.set(bottomRef.current, { x: 0 })
        }
      })
    }

    tl.to(middleRef.current, { height: '40vh', duration: 1, ease: 'power4.inOut' })

      
      .to(topRef.current, { y: 0, opacity: 1, duration: 1, ease: 'power4.inOut' })
      .to(middleTextRef.current, { y: 0, opacity: 1, duration: 1, ease: 'power4.inOut' }, '<')
      .to(bottomRef.current, { y: 0, opacity: 1, duration: 1, ease: 'power4.inOut' }, '<')

      
      .call(startInfiniteScroll)

      
      .to({}, { duration: 1.5 })
      .to(topRef.current, { x: -targetOffset, duration: 1.5, ease: 'power4.inOut' }, '<')
      .to(bottomRef.current, { x: -targetOffset, duration: 1.5, ease: 'power4.inOut' }, '<')
      .to(middleTextRef.current, { x: targetOffset, duration: 1.5, ease: 'power4.inOut' }, '<')

      
      .to(middleRef.current, { height: '1100px', duration: 1, ease: 'power4.inOut' })

      
      .to(topRef.current, { height: '0vh', opacity: 0, duration: 1, ease: 'power4.inOut' }, '<')
      .to(bottomRef.current, { height: '0vh', opacity: 0, duration: 1, ease: 'power4.inOut' }, '<')

      
      .to(middleRef.current.querySelectorAll('p'), {
        opacity: 0,
        duration: 0.5,
        ease: 'power4.inOut',
      })

      
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.display = 'none'
          if (onComplete) onComplete() // ✅ Notify parent when done
        },
      })
  }, [])

  const sharedClasses = `flex w-fit items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-20 lg:text-[150px] md:text-[100px] sm:text-[60px] text-[40px] text-nowrap  ${gelasio.className}`

  return (
    <div
      ref={containerRef}
      className="flex flex-col z-50 justify-between w-full h-full absolute overflow-hidden bg-black"
    >
      {/* Top Element */}
      <div ref={topRef} className={`${sharedClasses} opacity-0`}>
        {nameList.map((name, index) => (
          <p key={`top-${index}`} className="w-full text-white">
            {name}
          </p>
        ))}
       
        {nameList.map((name, index) => (
          <p key={`top-duplicate-${index}`} className="w-full text-white">
            {name}
          </p>
        ))}
      </div>

      {/* Middle Element */}
      <div
        ref={middleRef}
        className={`h-[0vh] items-center flex w-fit bg-white overflow-hidden ${gelasio.className}`}
      >
        <div ref={middleTextRef} className={`${sharedClasses} text-black`}>
          {nameList.map((name, index) => (
            <p key={`middle-${index}`} className="w-full">
              {name}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Element */}
      <div ref={bottomRef} className={`${sharedClasses} opacity-0`}>
        {nameList.map((name, index) => (
          <p key={`bottom-${index}`} className="w-full text-white">
            {name}
          </p>
        ))}
       
        {nameList.map((name, index) => (
          <p key={`bottom-duplicate-${index}`} className="w-full text-white">
            {name}
          </p>
        ))}
      </div>
    </div>
  )
}
