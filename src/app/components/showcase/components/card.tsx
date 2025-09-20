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
                    className='bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl transition-all duration-700 overflow-hidden hover:shadow-cyan-500/20 hover:border-slate-600/80 hover:bg-slate-800/95 group relative'
                    style={{
                        transform: `scale(${1 + index * 0.02})`,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                >
                    {/* Card Layout: Image on left, content on right */}
                    <div className='flex flex-col lg:flex-row min-h-[120px] lg:min-h-[200px]'>
                        {/* Enhanced Image Section */}
                        <div className='lg:w-2/5 bg-gradient-to-br from-slate-800/60 to-slate-900/80 flex items-center justify-center p-4 lg:p-12 relative overflow-hidden'>
                            {/* Modern Background Pattern */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-violet-500/15"></div>
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.15),transparent_50%)]"></div>
                                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.12),transparent_50%)]"></div>
                                {/* Subtle grid pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                            </div>

                            <div className='relative w-12 h-12 md:w-20 md:h-20 lg:w-40 lg:h-40 z-10'>
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/20 rounded-2xl blur-xl"></div>
                                <div className="absolute inset-2 bg-gradient-to-br from-white/8 to-white/4 rounded-xl backdrop-blur-sm border border-white/10"></div>
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className='object-contain filter drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] relative z-10 p-2'
                                />
                            </div>
                        </div>

                        {/* Enhanced Content Section */}
                        <div className='lg:w-3/5 p-3 md:p-6 lg:p-10 flex flex-col justify-between relative'>
                            {/* Subtle background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/10 rounded-r-3xl"></div>

                            {/* Header */}
                            <div className="relative z-10">
                                <div className='flex items-center justify-between mb-3 md:mb-6'>
                                    <div className='flex items-center gap-3'>
                                        <div
                                            className='w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-xl shadow-blue-500/25 border border-white/10'
                                        >
                                            {index + 1}
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='text-xs font-medium text-cyan-400 uppercase tracking-wider'>Project</div>
                                            <div className='text-xs text-slate-500'>#{String(index + 1).padStart(2, '0')}</div>
                                        </div>
                                    </div>

                                    {/* Enhanced Status Badge */}
                                    <div className='flex items-center gap-2 bg-emerald-500/15 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 shadow-lg shadow-emerald-500/10'>
                                        <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50'></div>
                                        <span className='text-xs text-emerald-300 font-medium tracking-wide'>Live</span>
                                    </div>
                                </div>

                                <h2 className='text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight drop-shadow-sm'>
                                    {title}
                                </h2>

                                <p className='text-slate-300 leading-relaxed mb-8 text-base lg:text-lg font-light'>
                                    {description}
                                </p>
                            </div>

                            {/* Enhanced Tech Stack */}
                            <div className="relative z-10">
                                <h3 className='text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2'>
                                    <div className='w-1 h-4 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 rounded-full shadow-sm'></div>
                                    Tech Stack
                                </h3>
                                <div className='flex flex-wrap gap-2.5'>
                                    {techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className='px-4 py-2.5 text-sm font-medium rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-600/60 text-slate-200 hover:bg-slate-700/70 hover:border-slate-500/70 hover:text-cyan-200 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:scale-105'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Enhanced View Project Button */}
                                <div className='mt-8'>
                                    <button className='group/btn relative bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 hover:from-cyan-500 hover:via-blue-500 hover:to-violet-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 flex items-center gap-3 overflow-hidden'>
                                        {/* Button background shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                                        <span className="relative z-10">View Project</span>
                                        <svg className='w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
