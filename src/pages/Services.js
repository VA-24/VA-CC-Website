import React, { useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

AOS.init({
    duration: 1000, // duration of the animation in milliseconds
    easing: 'ease-in-out', // easing function for the animation
    once: true
  });



function Services(){

    return(
        <body class='bg-white'>
            <div class='relative w-full flex flex-col items-center'>
            <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-80 top-0 px-6 py-8 bg-white z-[3] mt-4'>
            <nav class='w-full flex flex-row items-center justify-center tracking-tight gap-8'>
                    <a href="/" class="group text-sm md:text-base lg:text-lg xl:text-lg text-blue-800 font-medium transition duration-300">
                        Home
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
                    </a>

                    <a href="/services" class="group text-sm md:text-base lg:text-lg xl:text-lg text-blue-800 font-medium transition duration-300">
                        Services
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-800"></span>
                    </a>

                </nav>

                </main>
        
                <h3 class='font-medium text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black text-center pb-4'>Scroll to the bottom to see all services!</h3>



                <section id='projects' class='w-full h-full flex flex-col items-center gap-1'>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-[90vh] lg:h-[80vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 p-2 justify-start gap-8 px-4 py-8 lg:px-6 xl:px-12 xl:py-5 bg-white rounded-xl' data-aos='fade-up'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center'>All-inclusive counseling package</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Take full advantage of my services with this package. Rehash your essays as many times as you'd like, ask me virtually anything about your college journey in Zoom calls at your convenience, and schedule mock interviews whenever you have time. For any questions, email me at vardhan@wharton.upenn.edu.</p>
                        <div class='flex flex-row h-[25vh] lg:h-[20vh] justify-center tracking-tight gap-20 text-sm md:text-base lg:text-base xl:text-lg mt-1 xs:text-xs' data-aos='zoom-in' data-aos-delay='100'>
                                <div class='flex flex-col min-h-[200px]'>
                                    <li class='pb-2 text-neutral-600'>Live Zoom counseling sessions</li> 
                                    <li class='pb-2 text-neutral-600'>Live Zoom essay edits</li> 
                                    <li class='pb-2 text-neutral-600'>Live Zoom mock interviews</li> 
                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/UNsxMGsx3nvJyqLC6' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                        </div>
                    </div>

                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-[90vh] lg:h-[80vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 p-2 justify-start gap-8 px-4 py-8 lg:px-6 xl:px-12 xl:py-5 bg-white rounded-xl'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center'>Common App Essays</h3>
                        <p class='text-neutral-700 text-sm md:text-base lg:text-lg xl:text-lg mt-2 xs:text-xs'>Comb through your Common App essays and do in-depth, quality checks for grammar, flow, voice, tone, and key content points via asynchronous or live sessions.</p>
                        <div class='flex flex-row h-[25vh] lg:h-[20vh] justify-center tracking-tight gap-20 text-sm md:text-base lg:text-base xl:text-lg mt-1 xs:text-xs' data-aos='zoom-in' data-aos-delay='100'>
                                <div class='flex flex-col min-h-[200px]'>
                                    <div class='flex items-center'>
                                        <h3 class='pb-2 font-medium'>Asynchronous Common App essay edits</h3> 

                                    </div>

                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/3WCW1cgTTG88ri9W8' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                                <div class='flex flex-col min-h-[200px]'>
                                    <h3 class='pb-2 font-medium'>Common App essay edits + Zoom</h3>
    
                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/8VPyS5UzeXDVajPX6' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                        </div>



                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-[90vh] lg:h-[80vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 p-2 justify-start gap-8 px-4 py-8 lg:px-6 xl:px-12 xl:py-5 bg-white rounded-xl'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center'>Supplemental Essays (Per College)</h3>
                        <p class='text-neutral-700 text-sm md:text-base lg:text-lg xl:text-lg mt-2 xs:text-xs'>Comb through your supplemental essays and do in-depth, quality checks for grammar, flow, voice, tone, and key content points via asynchronous or live sessions.</p>
                        <div class='flex flex-row h-[25vh] lg:h-[20vh] justify-center tracking-tight gap-20 text-sm md:text-base lg:text-lg xl:text-lg mt-8 md:mt-4' data-aos='zoom-in' data-aos-delay='100'>
                                <div class='flex flex-col min-h-[200px]'>
                                    <h3 class='pb-2 font-medium'>Asynchronous supplemental essay edits</h3>
                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/Y9i4g3M13oUfKc1C8' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                                <div class='flex flex-col min-h-[200px]'>
                                    <h3 class='pb-2 font-medium'>Supplemental essay edits + Zoom</h3>
                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/CpUDzSFyyvQhn6Tp9' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                        </div>



                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-[90vh] lg:h-[80vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 p-2 justify-start gap-8 px-4 py-8 lg:px-6 xl:px-12 xl:py-5 bg-white rounded-xl' data-aos='fade-up'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center justify-center'>Counseling</h3>
                        <p class='text-neutral-700 text-sm md:text-base lg:text-lg xl:text-lg mt-2 xs:text-xs'>Brainstorm ways to get started with essays, discuss extracurricular involvement, chart out a course to get your essays in on-time, edit sections of your Common App portal, decide on colleges to apply to, go over your resume, and more.</p>
                        <div class='flex flex-row h-[25vh] lg:h-[20vh] justify-center tracking-tight gap-20 text-sm md:text-base lg:text-base xl:text-lg mt-1 xs:text-xs' data-aos='zoom-in' data-aos-delay='100'>
                                <div class='flex flex-col min-h-[200px]'>
                                    <h3 class='pb-2 mt-2 font-medium'>Live Zoom sessions</h3> 
                                    <li class='pb-2 text-neutral-600'>flexible scheduling (email me whenever works best for you)</li>
                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/iDcwvY2sBCNb4Mgt7' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                        </div>
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-[90vh] lg:h-[80vh] lg:max-h-[600px] flex flex-col xl:flex-row border border-blue-800 p-2 justify-start gap-8 px-4 py-8 lg:px-6 xl:px-12 xl:py-5 bg-white rounded-xl' data-aos='fade-up'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black text-center'>Interviews</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Schedule realistic mock interviews and learn to respond to the same questions colleges will ask you in actual interviews as I ask you common questions and provide real-time feedback on your answers. Payments made through PayPal.</p>
                        <div class='flex flex-row h-[25vh] lg:h-[20vh] justify-center tracking-tight gap-20 text-sm md:text-base lg:text-base xl:text-lg mt-1 xs:text-xs' data-aos='zoom-in' data-aos-delay='100'>
                                <div class='flex flex-col min-h-[200px]'>
                                    <h3 class='pb-2 mt-2 font-medium'>Live Zoom interview sessions</h3> 
                                    <li class='text-blue-800 font-medium underline'><a href='https://forms.gle/SMwrZBvNFFgp7LRp8' target='_blank'>REGISTER</a></li>
                                    
                                </div>
                        </div>
                    </div>

                </a>
                

                <div class='h-[15vh]'></div>
                <div class='bg-white w-full flex flex-col justify-center items-center'>
                    <p class='text-xs text-neutral-600 mb-2'>© 2025 Agni CC // Website made with ReactJS and TailwindCSS</p>
                </div>


            </section>

            </div>

            
        </body>
    )
}

export default Services;