import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email part*/}
            <div className="mt-5 space-y-3">
              <span>Email</span>
              <br />
              <input
                type="
          email"
                placeholder="Enter your emial"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.emailRequired && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
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
                {...register("password", { required: true })}
              />
              <br />
              {errors.PasswordRequired && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-5 ">
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200   cursor-pointer"
                // onClick={() =>
                // }
              >
                {" "}
                Login{" "}
              </button>
              <p>
                {" "}
                Not register?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  {" "}
                  signup
                </Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
