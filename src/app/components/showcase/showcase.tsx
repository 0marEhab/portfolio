import React from 'react'
import Card from './components/card'

const data = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        image: '/next.svg', // placeholder image
        techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        description: 'A modern shopping experience built with React and Node.js, featuring real-time inventory management and seamless payment integration.'
    },
    {
        id: 2,
        title: 'Portfolio Website',
        image: '/vercel.svg', // placeholder image
        techStack: ['Next.js', 'GSAP', 'Tailwind CSS', 'TypeScript'],
        description: 'Creative portfolio showcasing stunning animations and responsive design, built with Next.js and GSAP for smooth user interactions.'
    },
    {
        id: 3,
        title: 'Cura Rx',
        image: '/globe.svg', // placeholder image
        techStack: ['React', 'Nodejs', 'Express.js', 'postgreSQL'],
        description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and prescription tracking functionalities.'
    },
    {
        id: 4,
        title: 'The Custom Chief',
        image: '/window.svg', // placeholder image
        techStack: ['react.js', 'shopify liquid', 'hero.js', 'Tailwind CSS'],
        description: 'helped to build an e-commerce website with custom architecture and design, built on Shopify using Liquid migrated with react.js and Tailwind CSS for a sleek user experience.'
    },
    {
        id: 5,
        title: 'Grace',
        image: '/file.svg', // placeholder image
        techStack: ['Next.js', 'Framer Motion', 'Analytics', 'Tailwind CSS'],
        description: 'A modern web application ai analytics dashboard'
    }
]

export default function Showcase() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 ">
            {/* Modern Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Primary gradient orbs */}
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-violet-500/15 via-purple-600/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-emerald-400/12 via-teal-500/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Mesh gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.08),transparent_25%),radial-gradient(circle_at_40%_40%,rgba(6,182,212,0.06),transparent_25%)]"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-cyan-300/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-violet-300/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
                <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '2.5s' }}></div>
            </div>

            {/* Modern Header */}
            <div className="relative z-10 text-center py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Enhanced status badge */}
                    <div className="inline-flex items-center gap-3 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-3 mb-10 shadow-2xl shadow-blue-500/10">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <span className="text-slate-200 text-sm font-medium tracking-wide">Portfolio Showcase</span>
                        <div className="w-px h-4 bg-slate-600"></div>
                        <span className="text-cyan-400 text-xs font-semibold">2025</span>
                    </div>

                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                            Featured
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                            Projects
                        </span>
                    </h2>

                    <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 font-light">
                        Discover my latest work showcasing
                        <span className="text-cyan-300 font-medium"> cutting-edge web technologies</span> and
                        <span className="text-violet-300 font-medium"> innovative solutions</span>
                    </p>

                    {/* Enhanced scroll indicator */}
                    <div className="flex flex-col items-center">
                        <div className="text-slate-400 text-sm mb-4 font-medium tracking-widest uppercase">Scroll to explore</div>
                        <div className="relative">
                            <div className="w-8 h-12 border-2 border-slate-600/80 rounded-full flex justify-center backdrop-blur-sm bg-slate-800/20">
                                <div className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-bounce shadow-lg shadow-cyan-400/50"></div>
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-sm"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Container */}
            <div className="relative z-20">
                {data.map((project, index) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        techStack={project.techStack}
                        description={project.description}
                        index={index}
                    />
                ))}

                {/* Modern Bottom Spacer with Enhanced Fade Effect */}
                <div className="h-screen relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-200/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
                    {/* Subtle pattern overlay for the transition */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}

