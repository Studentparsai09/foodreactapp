import React from "react";
import HeroImg from "../../assets/1.png"
function Hero() {
    return (
        <div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h[600px]">
                {/* text-section */}
                <div className="flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10">
                    <h1 className="text-4xl  lg:text-6xl font-semibold">Delicious Food is waiting for you</h1>
                    <p className="">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    
                    <div className="flex-gap-4 items-center md:justify-start justify-center">
                        <button className="primary-btn hover:scale-105 duration-200">Food Menu</button>
                        <button className="secondary-btn hover:scale-105 duration-20 text-black">Book Table</button>
                    </div>
                </div>
                {/* image section */}
                <div className="flex flex-col justify-center">
                    <img src={HeroImg} alt=""className="animate-spin-slow img-shadow max-w-[600px] w-[340px] mx-auto md:mx-0 " />
                </div>
            </div>
        </div>
    );


};
export default Hero;