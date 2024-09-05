"use client"
import { useEffect, useState } from "react";
import { title } from "process";
import Link from "next/link";
import Image from "next/image";
import { clearInterval } from "timers";



const slides = [
    {
        id: 1,
        title: "Summer Sale Collection",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/4174746/pexels-photo-4174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-gray-100 to-blue-100"
    },
    {
        id: 2,
        title: "Winter Sale Collection",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        id: 3,
        title: "Spring Sale Collection",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/5956/gift-brown-shopping-market.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-white to-[#C4A484]"
    },
];

    

const Slider = () => {
            const [current, setCurrent] = useState(0);

       //     useEffect(() => {
       //       const interval = setInterval(()=> {
       //           setCurrent((prev)=> (prev === slides.length - 1 ? 0 : prev + 1));
       //       }, 3000);
       //         return () => clearInterval(interval);
       //   }, []);

return (
  <div className="h-[calc(100vh-80px)] overflow-hidden">
     <div className="w-max h-full flex transition-all ease-in-out duration-100"
          style={{transform: `translateX(-${current * 100}vw)`}}
     >
        {slides.map(slide => (
          <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                 {/* TEXT */}
              <div className="xl:h-full h-1/2 xl:w-1/2 flex flex-col items-center justify-center gap-4 xl:gap-8 text-center ">
                 <h1 className="text-xl lg:text-3xl 2xl:text-5xl "> {slide.description} </h1>
                  <h1 className="text-5xl lg:text-[62px] 2xl:text-8xl font-medium"> {slide.title} </h1>
                  <Link href={slide.url}>
                     <button className="rounded-lg bg-lava py-[10px] px-2 text-white"> SHOP NOW </button>
                 </Link>  
              </div>
                  {/* IMAGE */}
                    
                    <div className="xl:h-full h-1/2 xl:w-1/2 relative">
                <Image src={slide.img} alt="" fill sizes="100%" className="object-cover"/>
                    </div>
             </div>
            ))}
        </div>
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-3">
            {
              slides.map( (slide, index) => (
              <div key={slide.id}
                    onClick={()=>setCurrent(index)}
               className={`h-3 w-3 rounded-full ring-1 ring-lava cursor-pointer flex items-center justify-center ${current === index ? "scale-125" : ""}`} >
                      {
                        current === index && (
                          <div className="w-[8px] h-[8px] bg-lava rounded-full"> </div>
                        )
                      }
                  </div>
              ))
            }
            </div>
    </div>
  )
}

export default Slider;