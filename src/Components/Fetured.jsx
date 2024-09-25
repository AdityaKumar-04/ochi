import { motion } from 'framer-motion'
import React, { useState } from 'react'


export default function Fetured() {
    const [isHover, setisHover] = useState(false)
    const [issecHover ,setsecHover] = useState(false)
    
    return (
        <div className='w-full py-10'>
            <div className='w-full px-10 border-b-2 pb-20 border-zinc-700'>
                <h1 className='text-8xl tracking-tight'>Featured projects</h1>

            </div>
            <div className='px-20'>
                <div className='w-full flex gap-10 mt-20'>
                    <div className='w-1/2  h-[80vh] bg-slate-700 rounded-lg relative' onMouseEnter={() => setisHover(true)} onMouseLeave={() => setisHover(false)} >
                        <h1 className='absolute z-20 flex text-8xl font-semibold leading-none overflow-hidden tracking-tight left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {'FYDE'.split('').map((item, index) => <motion.span
                                className='inline-block '
                                initial={{ y: '100%' }}
                                animate={isHover ? ({ y: '0' }) : ({ y: '100%' })}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}>{item}</motion.span>)}
                        </h1>
                        <div className='w-full h-full bg-green-300 rounded-lg overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" className='w-full h-full bg-cover' />
                        </div>
                    </div>
                    <div className='w-1/2 h-[80vh] bg-slate-700 rounded-lg relative ' onMouseEnter={() => setsecHover(true)} onMouseLeave={() => setsecHover(false)}>
                        <h1 className='absolute  z-20 text-8xl flex  overflow-hidden font-semibold leading-none tracking-tight text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                            {'VISE'.split('').map((item, index) => <motion.span className='inline-block '
                                initial={{ y: '100%' }}
                                animate={issecHover ? ({ y: '0' }) : ({ y: '100%' })}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}>{item}</motion.span>)}
                        </h1>
                        <div className='w-full h-full bg-green-300 rounded-lg overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" className='w-full h-full bg-cover' />
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
