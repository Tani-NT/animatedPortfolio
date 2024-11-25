import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.from(".textArrive",{
            transform: 'rotateX(-80deg)',
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: '.textArrive',
                start: "top 80%",
                end: "top -270%",
                scrub: 2
            }
        })
    })

  return (
    <div id="5" className="bg-white text-center text-black pt-[2vw]">
      <div>
        <h1 className="textArrive text-[40vw] leading-[32vw] font-[font7] font-bold">HELPING</h1>
      </div>
      <div>
        <h1 className="textArrive text-[40vw] leading-[32vw] font-[font7] font-bold">MY</h1>
      </div>
      <div>
        <h1 className="textArrive text-[40vw] leading-[32vw] font-[font7] font-bold">CLIENTS</h1>
      </div>
      <div>
        <h1 className="textArrive text-[40vw] leading-[32vw] font-[font7] font-bold">TO ACHIEVE</h1>
      </div>
      <div>
        <h1 className="textArrive text-[40vw] leading-[32vw] font-[font7] font-bold">THEIR</h1>
      </div>
      <div>
        <h1 className="textArrive text-[40vw] leading-[32vw] font-[font7] font-bold">DREAMS!</h1>
      </div>
    </div>
  )
}

export default Page5