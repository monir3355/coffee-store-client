import React from "react";
import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <h2 className="container mx-auto text-4xl font-bold py-12">
        Coffee details
      </h2>
      <div className="flex flex-col md:flex-row justify-between bg-[#F5F4F1] rounded-lg px-6 py-8 container mx-auto mb-12">
        <figure className="w-2/6">
          <img className="md:w-full lg:w-2/3 w-2/3" src={photo} alt="Coffee" />
        </figure>
        <div className="flex justify-start items-center w-4/6">
          <div>
            <p>
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p className="py-2">
              <span className="font-semibold">Chef:</span> {chef}
            </p>
            <p>
              <span className="font-semibold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-semibold">Taste:</span> {taste}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Details:</span> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
