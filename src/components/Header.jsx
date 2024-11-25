import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Header = () => {

  useGSAP(function(){
    gsap.to('.banner',{
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: 'linear'
    })
    gsap.from('#headerBtn',{
      scale: 1.2,
      repeat: -1,
      duration: 2,
      transition: 'all linear 2s',
      ease: 'ease-in'
    })
    // gsap.from('#headerBtn',{
    //   scale: 1
    // })
  })

  return (
    <div className="relative flex justify-between z-[10] h-full flex-col items-end">
      <div className='fixed flex flex-col h-full items-end  justify-between'>
        <div className='p-[3vw]'>
          <button id="headerBtn" className="bg-black border-[2px] border-white px-[2vw] py-[.5vw] text-[1.2vw] font-light rounded-full font-[font1]">Hire Me</button>
          <i className="ri-more-2-fill text-zinc-400 text-[1.4vw] ml-[.5vw]"></i>
        </div>
        <div className='flex flex-col gap-[2vw] mr-[4vw] mb-[3vw]'>
          <img className='w-[5vw] banner' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="headerImage" />
          <img className='w-[5vw] banner' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="headerImage2" />
        </div>
      </div>
    </div>
  )
}

export default Header
