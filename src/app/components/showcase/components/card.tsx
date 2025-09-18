import React from 'react'
import Image from 'next/image'

interface CardProps {
    title: string
    image: string
    techStack: string[]
    description: string
    index: number
}

export default function Card({ title, image, techStack, description, index }: CardProps) {
    return (
        <div
            className='flex items-center justify-center '
            style={{
                position: 'sticky',
                top: `${index * 30}px`,
                zIndex: index + 1, // Now later cards have higher z-index
                marginTop: index === 0 ? '0' : '-10px' // Overlap previous cards
            }}
        >
            <div className='w-full max-w-6xl mb-16 mx-4'>
                <div
                    className='bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl shadow-2xl transition-all duration-500 overflow-hidden hover:shadow-blue-500/10 hover:border-gray-600/50 group'
                    style={{
                        transform: `scale(${1 + index * 0.02})`,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                >
                    {/* Card Layout: Image on left, content on right */}
                    <div className='flex flex-col lg:flex-row min-h-[120px] lg:min-h-[200px]'>
                        {/* Image Section */}
                        <div className='lg:w-2/5 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center p-4 lg:p-12 relative overflow-hidden'>
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                            </div>

                            <div className='relative w-12 h-12 md:w-20 md:h-20 lg:w-40 lg:h-40 z-10'>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl blur-lg"></div>
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className='object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110'
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className='lg:w-3/5 p-3 md:p-6 lg:p-10 flex flex-col justify-between relative'>

                            {/* Header */}
                            <div>
                                <div className='flex items-center justify-between mb-3 md:mb-6'>
                                    <div className='flex items-center gap-3'>
                                        <div
                                            className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg'
                                        >
                                            {index + 1}
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='text-xs font-medium text-blue-400 uppercase tracking-wider'>Project</div>
                                            <div className='text-xs text-gray-500'>#{String(index + 1).padStart(2, '0')}</div>
                                        </div>
                                    </div>

                                    {/* Status Badge */}
                                    <div className='flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1'>
                                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                                        <span className='text-xs text-green-400 font-medium'>Live</span>
                                    </div>
                                </div>

                                <h2 className='text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight'>
                                    {title}
                                </h2>

                                <p className='text-gray-400 leading-relaxed mb-8 text-base lg:text-lg'>
                                    {description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className='text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2'>
                                    <div className='w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full'></div>
                                    Tech Stack
                                </h3>
                                <div className='flex flex-wrap gap-2'>
                                    {techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='px-4 py-2 text-sm font-medium rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-200 backdrop-blur-sm'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Button */}
                                <div className='mt-8'>
                                    <button className='group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2'>
                                        View Project
                                        <svg className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
