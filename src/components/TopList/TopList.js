import React from "react"
import Food1 from "../../assets/3.png"
import Food2 from "../../assets/4.png"
import Food3 from "../../assets/5.png"


const FoodData = [
  {
    image: Food1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Food2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: Food3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Food Name 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function TopList() {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">TopList</h1>
        <p>Our  Top List</p>
      </div>
      {/* card scetion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
              <p className="text-red-500">{item.rating}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopList;