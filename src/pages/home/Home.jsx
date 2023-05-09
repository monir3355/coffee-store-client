import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { FaCoffee } from "react-icons/fa";
import Banner from "../../components/Banner";

const Home = () => {
  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);
  console.log(coffees);
  return (
    <>
      <Banner />

      <main className="my-12 mx-4 md:mx-0">
        {/* Our Popular Products */}
        <section className="container mx-auto">
          <div className="text-center mb-12">
            <p>--- Sip & Savor ---</p>
            <h2 className="text-4xl my-4 font-semibold">
              Our Popular Products : {coffees.length}
            </h2>
            <Link className="" to="/addcoffee">
              <button className="bg-[#E3B577] inline-flex justify-center items-center gap-1 py-2 px-4 rounded-md text-white">
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
        </section>
        {/* Follow on Instagram */}
        <section className="container mx-auto">
          <div className="text-center my-12">
            <p>--- Follow Us Now ---</p>
            <h2 className="text-4xl my-4 font-semibold">Follow on Instagram</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 10.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 11.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 12.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 13.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 14.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 15.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 16.png"
                alt="Cups"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                className="w-full"
                src="/images/cups/Rectangle 9.png"
                alt="Cups"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
