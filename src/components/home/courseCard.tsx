'use client'

import {useRef,useEffect,useLayoutEffect, use} from 'react'
import localFont from 'next/font/local'
import {motion,useAnimationControls,useAnimate} from 'framer-motion'

import {state} from '../../utils/reactState/store'

const OpticianSans = localFont({
  src: '../../../public/fonts/Optician-Sans.otf',
  display: 'swap',
})


interface CourseData {
  color: string;
  id:number;
}

interface Props {
  courseData: CourseData;
}


export default function CourseCard({courseData}: Props){


  const cardRef = useRef<HTMLDivElement>(null)

  const controller = useAnimationControls()

  const arrowController = useAnimationControls()



  useEffect(()=>{
   
    // 把所有的都
    const isAdded = state.cardsData.some((ele)=>{
      return ele.id === courseData.id
    })

    if(!isAdded){
      state.cardsData.push({
        id:courseData.id,
        controller:controller,
        arrowController:arrowController
      })
    }

  },[arrowController,controller,courseData.id])


  return (
    <div ref={cardRef} className={`h-[880px] w-[480px] ml-[30px] mr-[30px]  shrink-0 flex flex-col `}>
      <motion.div animate={controller} className={`h-1/3 w-full flex flex-col items-center ${courseData.id === 5 ? '' : 'opacity-0'}`}>
        <motion.span animate={arrowController} 
        style={{
          y:courseData.id === 5 ? -30 :-60,
          x:courseData.id === 5 ? 0 : 60,
          rotate:135
        }} 
        className="text-6xl">
                  -&gt;
        </motion.span>
        <span className='text-3xl'>一套课程彻底精通</span>
        <span className={`${OpticianSans.className} text-6xl tracking-wider`}>JavaScript</span>
      </motion.div>
      <motion.div
        onHoverStart={()=>{

          // const isAdded = state.cardsData.some((ele)=>{
          //   return ele.id === courseData.id
          // })

          state.cardsData.forEach((ele)=>{             
              
            if(ele.id === courseData.id){
              ele.controller.start({
                opacity:1
              })
              ele.arrowController.start({
                x:0,
                y:-30,
    
              })
            }else{
              ele.controller.start({
                opacity:0
              })
              ele.arrowController.start({
                y:-60,
                x:60,

              })
            }

          })
          
    
        }}
        // onHoverEnd={()=>{
        //   controller.start({
        //     opacity:0
        //   })
        //   arrowController.start({
        //     y:-60,
        //     x:60,

        //   })
        // }}
        className={
          `bg-hc-${courseData.color} w-full h-full rounded-3xl p-10 border border-black flex flex-col justify-between cursor-pointer`
        }
        // animate={colorCardController}
        >
        <div className='flex flex-col'>
          <span
            className={` ${OpticianSans.className} text-5xl`}
          >
            Master JS
            </span>
          <span
          className='text-4xl font-thin'
          >
            高手之路全能课
            </span>
        </div>
        <div className='flex flex-col gap-4'>
          <svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="4.5" stroke="black"/>
            <circle cx="17.5" cy="5" r="5" fill="black"/>
          </svg>
         <div className='text-xl font-thin flex flex-col gap-2 leading-8'>
          <p >
          我们的开发课程专注于提升页面交互和设计相关的技能。我们的课程将帮助您学习如何创建更好的用户体验，提高页面交互性，并设计出更吸引人的界面。
          </p>
          <p>通过我们的课程，您将学习到最新的设计趋势和最佳实践，并掌握实用的技能来提升您的开发能力。</p>
         </div>
        </div>
      </motion.div>
    </div>
  )
}