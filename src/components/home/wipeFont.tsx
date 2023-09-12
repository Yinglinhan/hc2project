'use client'

import { BlurFilter,TextStyle,Assets } from 'pixi.js';
import * as PIXI from 'pixi.js'
import { Stage, Container, Sprite, Text,useApp,AppProvider,Graphics } from '@pixi/react';
import { useMemo,useLayoutEffect,useState,useRef, useEffect,useCallback,ComponentProps } from 'react';




function GraphicsExample() {
  const draw = useCallback((g: PIXI.Graphics) => {
    g.clear();
   
    g.lineStyle(2, 0xff00ff, 1);
    g.beginFill(0xffffff);
    g.drawRoundedRect(0, 100, 300, 100, 300);
    g.endFill();
   
  }, []);
  return  <Graphics draw={draw} />
}

export default function WipeFont(){

  const [screenWidth, setScreenWidth] = useState(400)

  const containerRef = useRef<HTMLDivElement>(null)


  useLayoutEffect(()=>{
    setScreenWidth(containerRef.current?.clientWidth || 400)
  },[])


  // useLayoutEffect(()=>{

  //   async function loadFont(){
  //     // Load everything...
  //   await Assets.load(`/fonts/Optician-Sans.otf`);
  //   }
  // },[])

  return (
    <div 
      ref={containerRef}
      className="w-full"
      id='wipe-font-container'
    >
     <Stage 
      width={screenWidth}
      height={300}
      options={{ backgroundColor: 0xffffff}}
     >
      
      {/* <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={140}
        y={170}
        anchor={{ x: 0.5, y: 0.5 }}
      /> */}

      <Container x={100} y={100}>
        <Text 
          text="<Code.world/>" 
          anchor={{ x: 0, y: 0.5 }}  
          style={
            new TextStyle({
              fontSize:200,
              fontFamily:'Optician Sans',
            })
          }
        />
      </Container>
      {/* <GraphicsExample /> */}
    </Stage>
    </div>
  )
}