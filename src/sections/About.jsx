import { AnimateAbout } from '../animation/Animate'
import Me from '../assets/think.jpg'

export default function About(){
return(
    <section className="bg-gray-900 p-10 " id="ABOUT">


         <h1 className="uppercase text-xl md:text-2xl lg:text-3xl text-white p-6 mb-3 flex items-center justify-center gap-5">
        ABOUT ME
       <button className="animate-pulse text-blue-500  "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
       </button>
      </h1>




        <div className="container mx-auto gap-3 bg-blue-950 items-center place-items-center text-white grid md:grid-cols-2 p-3 ">
           
            <AnimateAbout delay={.3} direction={-10}>
            <div className='  lg:text-left  p-3 '>
                <img src={Me}  className='object-cover aspect-square w-full max-w-sm inline-block'/>
            </div>
            </AnimateAbout>
            <div className='p-5 lg:text-left bg-gray-900'>
                <AnimateAbout delay={.5} direction={-10}>
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold py-5'>Who I'M ?</h1>
            <p className=' text-2xs md:text-xs lg:text-sm  ' style={{}}>
                I am a passionate Frontend Developer with a strong 
                foundation in building responsive, user-centered web applications. 
                I specialize in transforming complex requirements into seamless digital 
                experiences through clean, maintainable, and efficient code.<br/><br/> My expertise
                 lies in modern UI architecture, performance optimization, and creating 
                 intuitive interfaces that bridge the gap between user needs and technical
                  functionality. I am dedicated to continuous learning and strive 
                to deliver pixel-perfect results that combine robust logic with aesthetic design.
            </p>
            </AnimateAbout>
        </div>
        </div>
    </section>
)
}

