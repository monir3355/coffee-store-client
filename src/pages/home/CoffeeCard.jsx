import React from "react";
import { FaRegEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleCoffeeDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <div className="flex justify-between bg-[#F5F4F1] rounded-lg px-6 py-8">
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
              <span className="font-semibold">Taste:</span> {taste}
            </p>
          </div>
        </div>
        <div className="inline-flex flex-col items-end justify-center gap-3">
          <Link className="p-2 bg-[#D2B48C] rounded-md text-white">
            <FaEye />
          </Link>
          <Link className="p-2 bg-black rounded-md text-white">
            <FaRegEdit />
          </Link>
          <Link
            onClick={() => handleCoffeeDelete(_id)}
            className="p-2 bg-red-500 rounded-md text-white"
          >
            <FaTrashAlt />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
