import assets from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
        name: 'Book My Foodtruck',
        description: '',
        image: assets.images.bmft,
        github: '',
        link: 'https://bookmyfoodtruck.fr/',
    },
    {
        name: 'Plasfora',
        description: 'Designed and developed PLASFORA, a medical tourism platform connecting international patients with healthcare services in Tunisia',
        image: assets.images.plasfora,
        github: '',
        link: '',
    },
    {
        name: 'DunDill',
        description: 'Design and development of a dashboard web application for DunDill’s developer recruitment process ',
        image: assets.images.dundill,
        github: '',
        link: '',
    },
    {
        name: 'QR Menu',
        description: 'Designed and developed a QR code menu digitization application that allows cafe and restaurant owners to manage menus in PDF and digital formats',
        image: assets.images.qrmenu,
        github: '',
        link: '',
    },
]

const ProjectsSection = () => {
    return (
        <section id='projects'>
            <h1 className='text-center font-bold text-4xl'>Projects
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
            </h1>
            <div className='flex flex-col space-y-28'>
                {projects.map((project) => {
                    return (
                        <div key={project.name}>
                            <SlideUp offset='-300px 0px -300px 0px'>
                            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                <div className='md:w-1/2'>
                                    <Link href={project.link}>
                                        <Image
                                            src={project.image}
                                            alt=''
                                            width={1000}
                                            height={1000}
                                            className='rounded-xl shadow-xl hover:opacity-70'
                                        />
                                    </Link>
                                </div>
                                <div className='mt-12 md:w-1/2'>
                                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                                    <div className='flex flex-row align-text-bottom space-x-4'>
                                        <Link href={project.github} target='_blank'>
                                            <BsGithub
                                                size={30}
                                                className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                        </Link>
                                        <Link href={project.link} target='_blank'>
                                            <BsArrowUpRightSquare
                                                size={30}
                                                className='hover:-translate-y-1 transition-transform cursor-pointer'
                                            />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection