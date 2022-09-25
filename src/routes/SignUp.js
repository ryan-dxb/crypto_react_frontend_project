import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
              />
              <AiOutlineMail className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
              />
              <AiFillLock className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Sign Up
          </button>
        </form>
        <p className="my-4 text-center">
          Already have an account?{" "}
          <Link to="/signup" className="text-accent">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
