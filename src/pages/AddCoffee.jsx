import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(addCoffee);
    fetch("https://coffee-store-server-gold.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Coffee Added",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="container mx-auto mt-12 mb-6">
        <Link to="/">
          <button className="inline-flex items-center gap-2">
            <FaArrowLeft /> Back To Home
          </button>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] p-12 lg:p-24 container mx-auto rounded-lg mb-12">
        <h2 className="text-4xl">Add Coffee</h2>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <div>
          <form onSubmit={handleAddCoffee}>
            {/* Row 1 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="chef"
                    placeholder="Enter coffee Chef"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* row 2 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee Supplier"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    placeholder="Enter coffee Taste"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 3 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter coffee Category"
                    className="input w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-3 md:mt-0">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter coffee Details"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* Row 4 */}
            <div className="md:flex gap-6 my-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter Photo URL"
                    className="input w-full"
                  />
                </label>
              </div>
            </div>
            {/* button */}
            <div className="text-center">
              <button className="btn w-full mt-6">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
