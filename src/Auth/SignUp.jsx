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
    // reset, // <-- Add this
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log("SignUp Data:", data);

    // // Clear the form after successful submission
    // reset(); 
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

        <div className="md:flex gap-2">
          {/* First Name */}
          <div className="py-1">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
            />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
          </div>

          {/* Last Name */}
          <div className="py-1">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
            />
            <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
          </div>
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

        {/* Confirm Password */}
        <div className="py-1">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("cPassword")}
            className="w-full p-2 mb-2 rounded bg-[#201F1E] text-white border border-gray-700"
          />
          <p className="text-red-500 text-sm">{errors.cPassword?.message}</p>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center">
          <input type="checkbox" {...register("terms")} className="accent-[#B67B0F]" />
          <h6 className="ml-1 text-[10px]">
            I Agree to <span className="underline cursor-pointer">Terms</span> & <span className="underline cursor-pointer">Conditions</span>
          </h6>
        </div>
        <p className="text-red-500 text-sm">{errors.terms?.message}</p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-[#B67B0F] text-white rounded-full mt-2 hover:bg-white hover:text-black"
        >
          Sign Up
        </button>
      </form>

      {/* Already Have an Account? */}
      <p className="text-gray-400 mt-4 text-sm">
        Already have an account?{" "}
        <span className="text-yellow-500 cursor-pointer" onClick={toggleAuth}>
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
