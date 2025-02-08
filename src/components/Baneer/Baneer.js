import React from "react"
import BaneerImg  from "../../assets/2.png"

function Baneer(){
    return (
        <div className="container py-14">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {/* img section */}
                <div className="flex justify-center items-center">
                  <img src={BaneerImg} alt=''/>
                </div>
                {/* text section */}
                <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
            <p className="py-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laboriosam vitae accusamus assumenda, nobis perferendis
              ducimus! Itaque similique, recusandae nulla{" "}
            </p>
          </div>
            </div>
        </div>
    );
};
export default Baneer;