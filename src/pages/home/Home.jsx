import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { FaCoffee } from "react-icons/fa";

const Home = () => {
  const loaderCoffee = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="text-center my-12">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-4xl my-4">
          Our Popular Products : {loaderCoffee.length}
        </h2>
        <Link className="" to="/addcoffee">
          <button className="bg-[#E3B577] inline-flex justify-center items-center gap-1 py-2 px-4 rounded-md">
            Add Coffee <FaCoffee />{" "}
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loaderCoffee?.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
