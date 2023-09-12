import Image from 'next/image'


import WipeFont from '@/components/home/wipeFont'
import CoursesBox from '../components/home/coursesBox'

export default function Home() {
  return (
   <div>
    <div>
      <WipeFont />
    </div>
    <div
      x-name="cards-box"
      className='flex justify-center absolute bottom-12 left-0 w-full'
    
    > 
     <CoursesBox>
  
     </CoursesBox>
    </div>
   </div>
  )
}
