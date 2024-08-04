import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthProvider";
import Modal from "./Modal";
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //redirecting to homepage or specific page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Account creation successfully done");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const { login, createUser } = useContext(AuthContext);
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create a Account</h3>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* login button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-green text-white"
            />
          </div>
          <p className="text-center my-2">
            Have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="underline text-red ml-1"
            >
              Login
            </button>
          </p>
          <Link
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            to="/"
          >
            ✕
          </Link>
        </form>
        {/* social sign in */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white">
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebook />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
