import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
function Signup() {
  return (
    <>
      <div className=" flex h-screen items-center justify-center ">
        <div id="my_modal_3" className=" border-[2px] px-4 py-8 rounded-xl  ">
          <div className="">
            <form className=" px-20">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost  absolute  top-12  "
              >
                {" "}
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className="mt-5 space-y-3">
              <span>Name</span>
              <br />
              <input
                type="
          email"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* email part*/}
            <div className="mt-5 space-y-3">
              <span>Email</span>
              <br />
              <input
                type="
          email"
                placeholder="Enter your emial"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            {/* Password part*/}
            <div className="mt-5 space-y-3">
              <span>Password</span>
              <br />
              <input
                type="
          email"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex justify-around mt-5 ">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                {" "}
                Signup{" "}
              </button>
              <p className="text-sm">
                {" "}
                Have account?{" "}
                <Link
                  to={"/"}
                  className="underline text-blue-500 cursor-pointer textarea-md"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </Link>
              </p>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
