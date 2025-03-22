import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../Utils/ValidationSchema"; // ✅ Use correct schema
import EggysImg from "../assets/EggysPlaceImg.svg";

const SignIn = ({ toggleAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log("SignIn Data:", data);
  };

  return (
    <div className="bg-[#100101] p-8 rounded-lg w-full max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <img src={EggysImg} alt="Eggy's Logo" className="w-12" />
      </div>
      <h2 className="text-white text-xl font-semibold mb-2">Welcome Back</h2>
      <p className="text-white mb-4">Sign In To Your Account</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="py-1">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div className="py-1">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* Forgot Password */}
        <p className="underline text-white-500 cursor-pointer">
          Forgot Password?
        </p>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full p-2 bg-[#B67B0F] text-white rounded-full mt-2 hover:bg-[#a06d0e]"
        >
          Sign In
        </button>
      </form>

      {/* Don't have an account? */}
      <p className="text-gray-400 mt-4 text-sm">
        Don't have an account?{" "}
        <span
          className="text-yellow-500 cursor-pointer"
          onClick={toggleAuth} // Switches to Sign Up
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
