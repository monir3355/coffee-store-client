import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { FaCoffee } from "react-icons/fa";

const Home = () => {
  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);
  return (
    <div className="container mx-auto">
      <div className="text-center my-12">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-4xl my-4">
          Our Popular Products : {coffees.length}
        </h2>
        <Link className="" to="/addcoffee">
          <button className="bg-[#E3B577] inline-flex justify-center items-center gap-1 py-2 px-4 rounded-md">
            Add Coffee <FaCoffee />{" "}
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees?.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
