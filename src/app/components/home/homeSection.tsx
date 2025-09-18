import React, { useEffect, useRef } from 'react'
import { Space_Grotesk } from 'next/font/google'
import { gsap } from 'gsap'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../header/navbar'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)
const space_Grotesk = Space_Grotesk({

  weight: '700',
})




export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    lenis.on('scroll', ScrollTrigger.update)


    const tl_intro = gsap.timeline({ delay: 0.5 })

    if (titleRef.current && subtitleRef.current && buttonRef.current) {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        y: 100,
        opacity: 0
      })

      // Animate elements in sequence
      tl_intro
        .to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out"
        })
        .to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")
        .to(buttonRef.current, {
          y: 0,
          opacity: 1,
          duration: .5,
          ease: "back.out(1.7)",
          scale: 1
        }, "-=0.3")



    }
  }, [])


  return (
    <>
      <div className={`text-black w-full min-h-screen bg-gray-100 flex flex-col justify-center ${space_Grotesk.className}`}>

        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16">
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[10rem] flex flex-col gap-4 sm:gap-6 md:gap-8">
            <h1 ref={titleRef} className="font-bold cursor-grow leading-none text-center lg:text-left">
              UI/UX Designer
            </h1>
            <p ref={subtitleRef} className="font-light cursor-grow leading-none text-center lg:text-left">
              & FullStack Web Developer
            </p>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8">
            <Link
              ref={buttonRef}
              href=""
              className='bg-green-800 cursor-none opacity-0 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 cursor-grow text-white text-lg sm:text-xl lg:text-2xl rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              Hire me
            </Link>
            <small className="text-sm sm:text-base text-center w-full opacity-70">scroll down</small>
          </div>
        </div>

      </div>
    </>
  )
}
