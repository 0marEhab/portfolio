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
        title: 'Mobile Banking App',
        image: '/globe.svg', // placeholder image
        techStack: ['React Native', 'Firebase', 'Redux', 'Biometrics'],
        description: 'Intuitive mobile banking interface with advanced security features, biometric authentication, and real-time transaction monitoring.'
    },
    {
        id: 4,
        title: 'Analytics Dashboard',
        image: '/window.svg', // placeholder image
        techStack: ['Vue.js', 'D3.js', 'PostgreSQL', 'Docker'],
        description: 'Real-time data visualization dashboard with interactive charts, customizable widgets, and comprehensive reporting tools.'
    },
    {
        id: 5,
        title: 'SaaS Landing Page',
        image: '/file.svg', // placeholder image
        techStack: ['React', 'Framer Motion', 'Analytics', 'A/B Testing'],
        description: 'High-converting landing page design with optimized user flow, A/B testing integration, and advanced analytics tracking.'
    }
]

export default function Showcase() {
    return (
        <section className="bg-gradient-to-b from-[#111] via-gray-800 to-gray-300 min-h-screen relative ">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-2 mb-8">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-medium">Portfolio Showcase</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
                        Featured <span className=" bg-clip-text text-transparent">Projects</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover my latest work showcasing modern web technologies and innovative solutions
                    </p>

                    {/* Scroll Indicator */}
                    <div className="flex flex-col items-center mt-12">
                        <div className="text-gray-500 text-sm mb-2">Scroll to explore</div>
                        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
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

                {/* Bottom Spacer with Fade Effect */}
                <div className="h-screen bg-gradient-to-t from-gray-100 to-transparent"></div>
            </div>
        </section>
    );
}

