import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../Utils/ValidationSchema";
import EggysImg from "../assets/EggysPlaceImg.svg";

const SignUp = ({ toggleAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log("SignUp Data:", data);
  };

  return (
    <div className="bg-[#100101] p-8 rounded-lg w-full max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <img src={EggysImg} alt="Eggy's Logo" className="w-12" />
      </div>
      <h2 className="text-white text-xl font-semibold mb-2">Create Account</h2>
      <h6 className="text-white mb-4">
        Let's get you started so you can start joining and creating events
      </h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName")}
          className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
        />
        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
        />
        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        <div className="flex">
          <input type="checkbox" className="accent-[#B67B0F]"/>
          <h6 className="ml-1">I Agree to <span className="underline">Terms</span> & <span className="underline">Conditions</span></h6>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-[#B67B0F] text-white rounded-full mt-2 hover:bg-[#a06d0e]"
        >
          Sign Up
        </button>
      </form>
      <p className="text-gray-400 mt-4 text-sm">
        Already have an account?{" "}
        <span
          className="text-yellow-500 cursor-pointer"
          onClick={toggleAuth} // Switches to Sign In
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
