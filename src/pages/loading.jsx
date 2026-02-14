import logo from '../assets/logo.png'
export default function Loading(){
    return(
        <div className = 'fixed w-full min-h-[100vh] z-100 flex justify-center items-center text-white '>
            <div className='relative  '>
                <div className='absolute w-[65%] h-[65%]
                 top-[50%] left-[50%] transform translate-x-[-50%]
                  translate-y-[-50%]  animate-spin border-b-4 border-blue-700 
                    rounded-full'>

                   </div>
                <img src={logo} alt="" srcset="" className=' '/>
            </div>

        </div>
    )
}