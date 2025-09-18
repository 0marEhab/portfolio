import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import image1 from '../../../../public/image1.png'
import image2 from '../../../../public/image2.png'
import image3 from '../../../../public/image3.png'
import image4 from '../../../../public/image4.png'


const data = [
  {
    id: 1,
    image: image1,
    title: 'UI/UX Designer',
    description: 'Creating intuitive and beautiful user experiences with modern design principles. Specializing in user research, wireframing, prototyping, and visual design to craft engaging digital products.',
  },
  {
    id: 2,
    image: image2,
    title: 'Frontend Developer',
    description: 'Building responsive and interactive web applications using React, Next.js, TypeScript, and modern CSS frameworks. Focused on performance optimization and seamless user interactions.',
  },
  {
    id: 3,
    image: image3,
    title: 'Backend Developer',
    description: 'Developing robust server-side applications and APIs using Node.js, Express, and various databases. Ensuring scalable architecture and secure data management solutions.',
  },
  {
    id: 4,
    image: image4,
    title: 'DevOps Engineer',
    description: 'Streamlining development workflows with CI/CD pipelines, cloud infrastructure, and containerization. Automating deployments and maintaining high-availability systems.',
  },
]

gsap.registerPlugin(ScrollTrigger)

export default function About() {

  useEffect(() => {
    // Add a small delay to ensure DOM is ready after visibility change
    const timer = setTimeout(() => {
      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh()

      // Image reveal animation
      gsap.utils.toArray('.image').forEach((img) => {
        gsap.fromTo(img as HTMLElement, {
          clipPath: 'inset(0% 100% 0% 0%)'
        }, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img as HTMLElement,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        })
      })

      // Title animation
      gsap.utils.toArray('.service-title').forEach((title) => {
        gsap.fromTo(title as HTMLElement, {
          x: -100,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title as HTMLElement,
            start: 'top bottom',
            end: 'top 70%',
            scrub: true,
          }
        })
      })

      // Description animation
      gsap.utils.toArray('.service-description').forEach((desc) => {
        gsap.fromTo(desc as HTMLElement, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: desc as HTMLElement,
            start: 'top bottom',
            end: 'top 60%',
            scrub: true,
          }
        })
      })
    }, 100) // 100ms delay

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <section
      id='about'
      data-section="about"
      className="min-h-screen bg-[#111] text-white flex flex-col px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-[95rem] mx-auto w-full overflow-hidden">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 sm:mb-10 lg:mb-12 tracking-tight text-white text-center lg:text-left"
        >
          Who Am I?
        </h2>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {data.map((service, i) => {
            return (
              <div key={i} className='slider flex flex-col md:flex-row w-full justify-between border-b border-white/25 pb-6 sm:pb-8 lg:pb-10 mb-6 sm:mb-8 lg:mb-10'>
                <div className='w-full md:w-[40%] mb-6 md:mb-0 md:self-center order-2 md:order-1 space-y-4'>
                  <h1 className='service-title text-2xl mt-5 md:mt-0 sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-center md:text-left'>{service.title}</h1>
                  <p className='service-description text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-center md:text-left'>{service.description}</p>
                </div>
                <div className='w-full md:w-[50%] h-48 sm:h-64 md:h-72 lg:h-80 xl:h-88 order-1 md:order-2'>
                  <div className='image w-full h-full bg-cover bg-center md:bg-left rounded-lg' style={{ backgroundImage: `url(${service.image.src})` }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
