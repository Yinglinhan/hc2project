'use client'

import React, { ReactElement,useEffect,useLayoutEffect,useRef,useState } from 'react';
import CourseCard from './courseCard';
import {motion,useAnimationControls,useSpring,useMotionValue,animate} from 'framer-motion'
import { gunzip } from 'zlib';


interface Props {
  children: React.ReactNode;
}


{/**
  功能目标

  1. 鼠标上下滚动 几个课程可以左右无限滑动
  2. 滑动结束会 离中间位置的最近的卡片 会自动滑动到中间位置（其实也是整体移动）


  无限滚动实现逻辑
  1. 先要计算卡片整体盒子的宽度 和 浏览器显示区域的宽度，并保证至少前后各有一个卡片是不在显示区域内的（卡片不够就初始化添加）
     卡片整体盒子整体是要居中的
     一个卡片宽度 包含自己左右的空白边距（一个卡片间距 等于 一个卡片左右两侧的间距之和）
     卡片盒子的整体宽度 = （卡片宽度 + 卡片间距） * 卡片数量
     卡拼盒子整体宽度 - 浏览器显示区域宽度 >= 两个卡片宽度 

    只要移动一个卡片的距离 就把第一个添加到最前面 或者把最前面添加到最后面





*/}

export default function CoursesBox({children}:Props){

  const [courseData,setCourseData] = useState([
   {
    color:'red',
    id:1
   },
   {
    color:'gray',
    id:2
   },
   {
    color:'blue',
    id:3
   },
   {
    color:'green',
    id:4
   },
   {
    color:'red',
    id:5
   },
   {
    color:'gray',
    id:6
   },
   {
    color:'blue',
    id:7
   },
   {
    color:'green',
    id:8
   },

  ])

  const controller = useAnimationControls()

  const scrollBoxRef = useRef(0)
  const scrollBoxConatinerRef = useRef<HTMLDivElement>(null)

  

  
  useEffect(()=>{
    function lerp(start: number, end: number, t: number): number {
      // 使用 Math.min 和 Math.max 函数确保 t 的值在 0 和 1 之间
      t = Math.min(Math.max(t, 0), 1);
    
      // 根据插值因子计算插值结果
      return (1 - t) * start + t * end;
    }

    let timer:number | null | NodeJS.Timeout = null
    let rotateBack : boolean = false
    let rotateGo : boolean = false

    function scrollHandel(event:WheelEvent){

      // 进行旋转
      moveRotate(event.deltaY)
   
      // 苹果滚动 卡片旋转还原
      if(Math.abs(event.deltaY) < 10 ){
     
        if(scrollBoxConatinerRef.current){
          const arrayChildren = Array.from(scrollBoxConatinerRef.current.childNodes)
          arrayChildren.forEach((item,index)=>{

            animate(item as HTMLDivElement,{rotate:0},{duration:0.08})
          })
            return
        }
      }

      scrollBoxRef.current += event.deltaY

      // 避免苹果鼠标的自动滚动逻辑时候的触发
      // 因为苹果鼠标的自动滚动会触发多次wheel事件
      // 包括用一般鼠标 也可能会触发多次
      // 这里就把上一次滚动触发的timer可以取消了 
      // 两次触发的间隔小 可以在定时器回调执行前取消
      clearTimeout(timer!)

      // 苹果鼠标的自动滚动最后的deltaY的值就是1或者-1
      // 避免了苹果鼠标情况在最后时候的触发
      if(Math.abs(event.deltaY) !== 1){
        
        timer = setTimeout(()=>{
          afterScrollHandel(event.deltaY)
        },50)  
      }
      
      if(scrollBoxConatinerRef.current){
        // console.log(event.deltaY)
        const arrayChildren = Array.from(scrollBoxConatinerRef.current.childNodes)

        if(Math.abs(scrollBoxRef.current) >= 540){

          if(scrollBoxRef.current > 0){
            // 从左向右滑动
            arrayChildren.unshift(arrayChildren.pop()!)
            
            scrollBoxRef.current -= 540
            console.log('j')
        
          }else{
            // 从右向左滑动
            arrayChildren.push(arrayChildren.shift()!)
            scrollBoxRef.current += 540
          }

          scrollBoxConatinerRef.current.innerHTML = ''
          scrollBoxConatinerRef.current.append(...arrayChildren)
        }

          controller.set({
            x:scrollBoxRef.current
          })
        
          

      }
    }

    // 这里其实就是模拟wheel的触发逻辑去处理 然后用lerp函数逐步减小deltaY的值
    function afterScrollHandel(deltaY:number){
      // console.log('deltaY',deltaY)
      if(Math.abs(deltaY) <= 0.5){
        return
        
      }else{
        scrollBoxRef.current += deltaY
        if(scrollBoxConatinerRef.current){
          const arrayChildren = Array.from(scrollBoxConatinerRef.current.childNodes)
          if(Math.abs(scrollBoxRef.current) >= 540){

            if(scrollBoxRef.current > 0){
              // 从左向右滑动
              arrayChildren.unshift(arrayChildren.pop()!)
              
              scrollBoxRef.current -= 540
              console.log('j')
          
            }else{
              // 从右向左滑动
              arrayChildren.push(arrayChildren.shift()!)
              scrollBoxRef.current += 540
            }
  
            scrollBoxConatinerRef.current.innerHTML = ''
            scrollBoxConatinerRef.current.append(...arrayChildren)
          }
  
            controller.set({
              x:scrollBoxRef.current
            })

          timer = setTimeout(()=> {
            afterScrollHandel(lerp(deltaY,0,0.3))
          },50)
            
  
        }
      }

      if(Math.abs(deltaY)<10){
        // console.log('normal back')
        if(scrollBoxConatinerRef.current){
          const arrayChildren = Array.from(scrollBoxConatinerRef.current.childNodes)
          arrayChildren.forEach((item,index)=>{

            animate(item as HTMLDivElement,{rotate:0})
          })
            return
        }
      }
    }


    function moveRotate(deltaY:number){

      if(scrollBoxConatinerRef.current?.childNodes){
        const arrayChildren = Array.from(scrollBoxConatinerRef.current?.childNodes)
        arrayChildren.forEach((item,index)=>{

          animate(item as HTMLDivElement,{ rotate: deltaY > 0 ?  5 : -5})
          
        })
      }
      

    }

    window.addEventListener('wheel',scrollHandel)

    return ()=>{
      window.removeEventListener('wheel',scrollHandel)
    }

  },[controller])


  return (
    <motion.div 
      ref={scrollBoxConatinerRef} 
      animate={controller} 
      // style={{x:springX}} 
      className="flex justify-center w-full"
    >
      {
        courseData.map((item,index)=>{
          return <CourseCard key={item.id} courseData={{color:item.color,id:item.id}}></CourseCard>
        })
      }
    </motion.div>
  )
}