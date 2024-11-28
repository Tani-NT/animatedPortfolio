const Page3 = () => {
  return (
    <div className="h-screen max-sm:h-[50vh] relative flex items-center justify-center">
        <img className="absolute z-20 w-[65vw]" src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_586,h_337,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="laptop" />
       <video autoPlay="true" loop muted className="max-sm:w-[48vw] max-sm:h-[17vh] relative z-10 w-[50vw] h-[70vh] object-cover" src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
       <div className="max-sm:top-[45%] absolute w-[65%] h-[1px] top-[40%] bg-gray-500 "></div>
       <div className="max-sm:top-[50%] absolute w-[80%] h-[1px] top-[58%] bg-gray-500 "></div>
       <div className="max-sm:top-[55%] absolute w-[100%] h-[1px] top-[75%] bg-gray-500 "></div>
    </div>
  ) 
}

export default Page3
