import { useRef, useState } from "react";
import Page1Bottom from "../components/Page1Bottom"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import TiltText from "../components/TiltText";

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/10)
    setYVal((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: "power4.out"
    })
  },[xVal,yVal])

  return (
    <div onMouseMove={(e) => {mouseMoving(e)}} className="h-screen bg-white p-[1vw] ">
        <div id="page1Tilt" className="w-full relative px-[4vw] py-[3.5vw] shadow-2xl bg-center shadow-gray-400 bg-cover h-full rounded-xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_147,h_83,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/ANZO.jpg)]">
            <img className="w-[5vw]" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="logo" />
            <TiltText tilt={tiltRef} />
            <Page1Bottom/>
        </div>
    </div>
  )
}

export default Page1
