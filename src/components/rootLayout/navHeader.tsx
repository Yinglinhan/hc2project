
import MovingEye from './movingEye'

import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../../public/fonts/Gilroy-Regular.otf',
  display: 'swap',
})


export default function NavHeader(){
  
  return (
    <div className={`flex justify-between ${myFont.className}`}>
      <div x-name="left-part" className="flex gap-12">
        <svg width="70" height="29" viewBox="0 0 70 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="33.8584" cy="4.52598" rx="4.48212" ry="4.48249" fill="black"/>
          <ellipse cx="44.7947" cy="4.52598" rx="4.48212" ry="4.48249" fill="black"/>
          <ellipse cx="55.7311" cy="4.52598" rx="4.48212" ry="4.48249" fill="black"/>
          <path d="M3.02788 0.188171H1.28442V8.90617H3.02788V5.33179H6.79418V8.90617H8.53763V0.188171H6.79418V3.76255H3.02788V0.188171Z" fill="black"/>
          <path d="M17.984 1.75741V0.188171H11.2711V8.90617H17.984V7.33693H13.0146V5.33179H17.1556V3.76255H13.0146V1.75741H17.984Z" fill="black"/>
          <path d="M20.9121 8.92756H22.6556V7.35832V0.209564H20.9121V8.92756Z" fill="black"/>
          <path d="M25.2586 8.90617H27.002V7.33693V0.188171H25.2586V8.90617Z" fill="black"/>
          <rect x="62.5037" width="7.49625" height="8.95459" fill="black"/>
          <path d="M1.72108 15.8247L4.14134 16.095C4.39233 16.095 4.49989 16.2031 4.46404 16.4194C4.46404 16.5636 4.30269 16.6537 3.97999 16.6897C3.94413 17.0862 3.89035 17.5007 3.81864 17.9332H5.27079L6.45403 18.5819C6.2389 21.213 5.89827 23.0872 5.43214 24.2045C5.89827 24.5649 6.34647 24.9434 6.77673 25.3398L6.40025 25.7723C7.87033 26.0246 8.47988 25.8985 8.22889 25.3939V23.3395H6.29268V21.0688H8.22889V20.2579L9.35835 18.4197H6.34647V16.2031H11.5097L12.6929 17.2844L10.7567 20.4741V21.0688H12.6929V23.3395H10.7567V26.367C10.7926 27.196 10.5595 27.7186 10.0575 27.9349C9.66312 28.1511 8.60538 28.2593 6.8843 28.2593C6.81259 27.4663 6.61538 26.6914 6.29268 25.9345L5.16323 27.178C4.84052 26.9257 4.51782 26.6734 4.19512 26.4211C3.58557 27.0338 2.79675 27.6646 1.82864 28.3133C1.29081 27.5564 0.681259 26.9437 0 26.4752C0.932249 26.1508 1.72108 25.6282 2.36648 24.9073C2.1872 24.7992 1.93621 24.619 1.61351 24.3667C0.968105 23.8621 0.466125 23.5017 0.107567 23.2854C0.430269 22.3123 0.735043 21.231 1.02189 20.0416H0.161351V17.9332H1.45216C1.55972 17.1763 1.57765 17.0681 1.50594 17.6088C1.57765 17.0681 1.64936 16.4735 1.72108 15.8247ZM4.2489 20.0416H3.44215C3.37044 20.4381 3.20909 21.0328 2.9581 21.8257C2.92224 22.0059 2.88639 22.1501 2.85053 22.2582C2.9581 22.3303 3.11945 22.4384 3.33458 22.5826C3.47801 22.6907 3.58557 22.7628 3.65728 22.7989C3.94413 22.042 4.14134 21.1229 4.2489 20.0416Z" fill="black"/>
          <path d="M21.4059 16.0409C21.621 16.113 21.7286 16.2031 21.7286 16.3113C21.7286 16.4915 21.6031 16.5816 21.3521 16.5816C21.3521 16.6537 21.3521 16.6897 21.3521 16.6897H25.8161V18.636H22.2664C22.4098 18.672 22.625 18.7441 22.9118 18.8522C23.9158 19.2127 24.6687 19.519 25.1707 19.7713C24.9197 19.9876 24.6508 20.2759 24.364 20.6363H26.4615V22.6367H24.9018V26.9617C25.0811 27.9709 24.0233 28.4395 21.7286 28.3674C21.6927 27.9709 21.5672 27.5564 21.3521 27.1239H16.9956V27.6646H14.7367V23.1773H21.5672V26.313C22.3919 26.4211 22.7684 26.349 22.6967 26.0967V22.6367H13.7686V20.6363H15.3821C15.0953 20.348 14.7905 20.0597 14.4678 19.7713C16.0454 19.4109 17.1211 19.0324 17.6948 18.636H14.414V16.6897H18.9856C19.0215 16.4374 19.0394 16.1491 19.0394 15.8247L21.4059 16.0409ZM19.9537 19.4469C19.4876 19.8794 18.9318 20.2759 18.2864 20.6363H22.2664C21.5134 20.2038 20.7425 19.8074 19.9537 19.4469ZM16.9956 24.7451V25.6102H19.3083V24.7451H16.9956Z" fill="black"/>
          <path d="M38.2939 15.8247C38.8318 16.2932 39.4772 16.96 40.2301 17.825L39.0469 18.7441L39.9612 18.636L40.2301 20.7985L36.788 21.2851C37.1824 23.6278 37.5768 24.8713 37.9712 25.0155C38.1864 25.1236 38.276 24.6731 38.2401 23.6639C38.8138 24.0964 39.5489 24.4568 40.4453 24.7451C40.1226 27.196 39.2979 28.3494 37.9712 28.2052C36.035 28.2773 34.7621 26.0967 34.1526 21.6635L32.2164 21.9338L32.0012 19.7173L33.8837 19.4469C33.8837 19.2307 33.8657 18.9063 33.8299 18.4738C33.7582 17.3925 33.7223 16.5275 33.7223 15.8788L36.3039 15.9328C36.5191 15.9328 36.6266 16.0229 36.6266 16.2031C36.6266 16.3833 36.5011 16.4735 36.2501 16.4735C36.286 16.8339 36.3219 17.3565 36.3577 18.0413C36.4294 18.5098 36.4653 18.8703 36.4653 19.1226L37.7561 18.9604C37.29 18.3837 36.8238 17.8611 36.3577 17.3925L38.2939 15.8247ZM32.5391 16.4735C32.8259 16.5455 32.9335 16.6717 32.8618 16.8519C32.7901 16.96 32.6466 17.0141 32.4315 17.0141C32.3957 17.0862 32.3598 17.2123 32.3239 17.3925C32.2522 17.6448 32.1088 18.0413 31.8937 18.5819V28.2052H29.3658V23.0151C29.2583 23.1232 29.0969 23.2854 28.8818 23.5017C28.7025 23.754 28.5591 23.9342 28.4515 24.0423C28.2005 23.0331 27.842 22.1321 27.3759 21.3392C28.5949 19.6812 29.4734 17.825 30.0112 15.7706L32.5391 16.4735Z" fill="black"/>
          <path d="M50.8255 20.9607L50.9869 18.5279H46.9531V16.3113H53.4609L53.2458 20.9607H53.945L53.7298 26.7455C53.945 27.9349 52.8155 28.4395 50.3415 28.2593C50.2697 27.6465 50.0367 26.9798 49.6423 26.2589C50.8972 26.4752 51.4888 26.367 51.4171 25.9345L51.5785 23.1773H47.1144L47.3834 18.9604L49.6423 19.0685C49.8574 19.0685 49.965 19.1586 49.965 19.3388C49.965 19.519 49.8395 19.6091 49.5885 19.6091L49.5347 20.9607H50.8255ZM46.5228 27.9349H44.6942V27.3402H44.2101V28.2052H42.1663V23.772L41.6285 24.1504C41.5568 23.1413 41.3955 22.2042 41.1445 21.3392C41.9333 20.4381 42.4711 19.465 42.758 18.4197H41.3058V16.3113H46.6304V18.4197H45.232C44.981 19.1766 44.7121 19.8975 44.4253 20.5823H46.5228V27.9349ZM51.0406 25.9345H46.7917V23.8261H51.0406V25.9345ZM44.6942 25.1776V22.7448H44.2101V25.1776H44.6942Z" fill="black"/>
        </svg>
        <div className="flex gap-4">
        {
          ["RoadMap","Shares","Cases","About"].map((ele,index)=>{
            return <span key={index} className='border border-black p-1 pl-3 pr-3 text-sm rounded-md'>{ele}</span>
          })
        }
        </div>
      </div>

      <MovingEye />

      <div className='flex gap-4'>
        <span>login</span>
        <span>signup</span>
      </div>
    
    </div>
  )
}