import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdatedCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`https://coffee-store-server-gold.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className="py-12">
        <div className="py-4">
          <Link to="/">
            <button className="inline-flex items-center gap-2">
              <FaArrowLeft /> Back To Home
            </button>
          </Link>
        </div>
        <div className="bg-[#F4F3F0] p-12 lg:p-24 rounded-lg">
          <h2 className="text-4xl">Update Coffee</h2>
          <div>
            <form onSubmit={handleUpdatedCoffee}>
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
                      defaultValue={name}
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
                      defaultValue={chef}
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
                      defaultValue={supplier}
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
                      defaultValue={taste}
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
                      defaultValue={category}
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
                      defaultValue={details}
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
                      defaultValue={photo}
                      placeholder="Enter Photo URL"
                      className="input w-full"
                    />
                  </label>
                </div>
              </div>
              {/* button */}
              <div className="text-center">
                <button className="btn w-full mt-6">Update Coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
