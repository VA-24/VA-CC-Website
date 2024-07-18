import React, { useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

AOS.init({
    duration: 1000, // duration of the animation in milliseconds
    easing: 'ease-in-out', // easing function for the animation
  });


function Home(){

    return(
        
        <body class='bg-white min-h-screen m-0'>
            <div class='relative w-full flex flex-col items-center min-h-screen'>
            <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-80 top-0 px-6 py-8 bg-white z-[2] mt-4'>

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


                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col justify-center lg:flex-row gap-12 px-6 pb-8 pt-8 z-[1] border border-neutral-800 p-2 rounded-md mt-10 mb-5 shadow-lg shadow-neutral-70'>
                    <div class='relative w-full h-[16vh] lg:w-[230px] lg:h-[220px] xl:w-[300px] xl:h-[430px] flex-shrink-0 shadow-lg shadow-neutral-700 overflow-hidden rounded-lg select-none ease-linear transition mt-1 [&>.shine]:hover:block'>
                        <img
                            src={require('../assets/vardhan.jpg')}
                            alt='pfp'
                             // Adjust the width as needed
                        />
                    </div>

                    <div class='flex flex-col gap-8'>
                        <h3 class='text-xl xl:text-3xl font-medium text-blue-800'>
                        Hi, I’m Vardhan Agnihotri.
                        </h3>

                        <p class='text-base sm:text-med text-neutral-600'>
                        I’m a recent graduate of St. Mark’s School of Texas and a rising freshman at the University of Pennsylvania, where I will obtain dual degrees in finance from Wharton and electrical engineering from the School of Engineering through the M&T program. Having just wrapped my senior year, I know all-too-well the stresses that come with college apps. Through copious amounts of research, I was fortunate enough to develop a robust gameplan that assisted me through the strenuous process and got me to the finish line with a 100% acceptance rate into the colleges I applied to. I’m eager to share my advice and skills with you.
                        </p>

                        <p class='text-base sm:text-med text-neutral-600'>
                        For just a tiny fraction of the cost of what other professional services offer, I’ll gladly edit your commonapp or supplemental essays, offer interview advice, and provide resume feedback. 
                        </p>

                        <h3 class='text-xl xl:text-xl font-medium text-blue-800'>
                        Let me help you on your journey to getting into the school of your dreams.
                        </h3>
                        
                    </div>
                </section>
                </div>

                {/* <div class='bg-gradient-to-t from-blue-800 to bg-neutral-200 w-full h-10'>

                </div> */}

                <div class='bg-blue-800 w-full flex flex-col items-center py-8'>
                <div class='w-full max-w-6xl flex flex-col lg:flex-row justify-center gap-10 mt-8'>
                    <div class='p-6 w-full lg:w-1/3 rounded-lg shadow-lg flex flex-col items-center border border-yellow-600' data-aos='zoom-in' data-aos-delay='200'>
                        <h3 class='text-lg font-semibold text-yellow-600 mb-5'>Essay Editing</h3>
                        <p class='text-base text-white'>Edit and/or brainstorm Common App and supplemental essays for affordable prices.</p>
                    </div>
                    <div class='p-6 w-full lg:w-1/3 rounded-lg shadow-lg flex flex-col items-center border border-yellow-600' data-aos='zoom-in' data-aos-delay='200'>
                        <h3 class='text-lg font-semibold text-yellow-600 mb-5'>Counseling Advice</h3>
                        <p class='text-base text-white'>Create essay-writing schedules, generate the perfect resume, improve your Common App, and more.</p>
                    </div>
                    <div class='p-6 w-full lg:w-1/3 rounded-lg shadow-lg flex flex-col items-center border border-yellow-600' data-aos='zoom-in' data-aos-delay='200'>
                        <h3 class='text-lg font-semibold text-yellow-600 mb-5'>Mock Interviews</h3>
                        <p class='text-base text-white'>Schedule realistic mock interviews and receive feedback on answers to ace college interviews.</p>
                    </div>
                </div>
                
               
                <div class='p-2 mt-10 w-1/3 lg:w-1/6 rounded-lg shadow-lg flex flex-col items-center border border-yellow-600'>
                    <h3 class='text-xl xl:text-3xl font-bold text-yellow-600'>
                        <a href='/services'>
                        Explore more
                        </a>
                    </h3>
                </div>
                
                </div>

                
                

        </body>
    )
}

export default Home;