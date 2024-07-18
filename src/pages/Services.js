import React, { useState, useEffect} from 'react';
import '../App.css';


function Services(){

    return(
        <body class='bg-white'>
            <div class='relative w-full flex flex-col items-center'>
            <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-80 sticky top-0 px-6 py-8 bg-white z-[3] mt-4'>
            <nav class='w-full flex flex-row items-center justify-center tracking-tight gap-8'>
                    <a href="/" class="group text-xs xl:text-lg text-blue-800 font-medium transition duration-300">
                        Home
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
                    </a>

                    <a href="/services" class="group text-xs xl:text-lg text-blue-800 font-medium transition duration-300">
                        Services
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
                    </a>

                </nav>

                </main>

                <section id='projects' class='w-full h-full flex flex-col items-center gap-1'>
                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 p-2 justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-12 mt-8 bg-white rounded-xl'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center'>Essays</h3>
                        <p class='text-base lg:text-lg 2lg:text-lg text-neutral-700'>Solidify your Common App/supplemental essays via asynchronous or live sessions. Simply fill out a google form and I'll get back to you within 24 hours with my edits. A week later, send me your improved essay and I'll add my final comments. Additional edits past the first two are available for extra cost.</p>
                        <div class='flex flex-row'>
                                <div class='flex flex'></div>
                        </div>
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center justify-center'>Counseling</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'></p>
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 mb-20 bg-white rounded-xl'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center'>Interviews</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'></p>
                    </div>

                </a>


            </section>

            </div>

            
            
        </body>
    )
}

export default Services;