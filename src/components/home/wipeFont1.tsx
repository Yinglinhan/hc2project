'use client'

import * as PIXI from 'pixi.js'
import {useRef, useLayoutEffect, useState} from 'react'


export default function Main(){

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [screenWidth, setScreenWidth] = useState(400)

  useLayoutEffect(()=>{

    // canvas初始化
    setScreenWidth(containerRef.current?.clientWidth || 400)

    const canvas = canvasRef.current!
    const app = new PIXI.Application({
      view:canvas,
      width:screenWidth,
      height:250,
      backgroundColor:0xffffff,
      antialias:true,
      // autoDensity:true,
      // resolution:window.devicePixelRatio || 2, 
    })
    const style = new PIXI.TextStyle({
      fontFamily: 'Optician Sans',
      fontSize: 200,
      fill: '#000000',
    });
    const text = new PIXI.Text('HelloCode!', style);
    text.anchor.set(0,0.5);
    text.x = 100;
    text.y = 100;
    app.stage.addChild(text);



  

    const topCircle = new PIXI.Graphics();
    topCircle.beginFill(0xffffff);
    topCircle.lineStyle(4, 0x000000);
    
    topCircle.drawEllipse(0, 0, 60, 100); // 在本地坐标系中绘制椭圆
    topCircle.endFill();
    
    topCircle.pivot.set(0, 0); // 设置旋转中心为椭圆的中心点
    topCircle.position.set(100, 120); // 将椭圆移回到舞台中的(100,100)位置
    
    // topCircle.angle = 100
    app.stage.addChild(topCircle);



    const whiteCircle = new PIXI.Graphics();
    whiteCircle.beginFill(0xffffff);
    whiteCircle.lineStyle(4, 0xfff);
    
    whiteCircle.drawEllipse(0, 0, 60, 100); // 在本地坐标系中绘制椭圆
    whiteCircle.endFill();
    
    whiteCircle.pivot.set(0, 0); // 设置旋转中心为椭圆的中心点
    whiteCircle.position.set(100, 120); // 将椭圆移回到舞台中的(100,100)位置
    
    // whiteCircle.angle = 100
    app.stage.addChild(whiteCircle);




    

    let angle = 0; // 初始旋转角度为0
    let degree = Math.PI/400;

    app.ticker.add(() => {
      console.log(angle)
      topCircle.x += 5; // 每帧向右移动10个像素
      if(angle > Math.PI/12){
         degree = -Math.PI/400; // 每帧旋转角度增加0.01弧度
      }

      if(angle < -Math.PI/24){
        degree = Math.PI/400; // 每帧旋转角度增加0.01弧度
      }
      angle += degree
      topCircle.rotation = angle; // 设置旋转角度

    });

    app.ticker.add(()=>{
      const clonedRect = whiteCircle.clone();
      clonedRect.pivot.set(0, 0); // 设置旋转中心为椭圆的中心点
      clonedRect.position.set(100, 120); // 将椭圆移回到舞台中的(100,100)位置
      
      app.stage.addChild(clonedRect);

      clonedRect.x += 5; // 每帧向右移动10个像素
      if(angle > Math.PI/12){
         degree = -Math.PI/400; // 每帧旋转角度增加0.01弧度
      }

      if(angle < -Math.PI/24){
        degree = Math.PI/400; // 每帧旋转角度增加0.01弧度
      }
      angle += degree
      clonedRect.rotation = angle; // 设置旋转角度
    })


  },[screenWidth])

  return(
    <div
    ref={containerRef}
    className="w-full"
    id='wipe-font-container'
    >
      <canvas ref={canvasRef} width={screenWidth} height={250} className='bg-black border'>

      </canvas>
    </div>
  )
}