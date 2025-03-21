import React from "react";

const Hero = () => {
  return (
    <main className="flex justify-center overflow-hidden">
      <div
        className="hero min-h-screen w-full flex items-center justify-center text-center px-4 sm:px-6 md:px-10"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dmb5ggmvg/image/upload/v1741656426/Frame_1171276711_tmhdwm.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[90vw] sm:max-w-[85vw] md:max-w-[70vw] lg:max-w-[60vw] animate__animated animate__backInUp">
          <h1 className="font-[Red-Hat-Text] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[56px] tracking-widest break-words whitespace-normal text-wrap balance text-white">
            The <span className="text-[#B67B0F] rammetto-one-regular">ZING</span> in every bite
          </h1>
          <p className="font-[Red-Hat-Text] font-medium mt-6 text-[16px] sm:text-[18px] md:text-[24px] tracking-wider leading-7 max-w-full break-words whitespace-normal text-wrap balance text-white">
            Savor the flavor! Explore our delicious menu and order now for a taste sensation!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <button className="rounded-[31px] h-[50px] w-[160px] sm:h-[60px] sm:w-[180px] bg-[#B67B0F] text-white font-bold">
              Order Now!
            </button>
            <button className="rounded-[32px] h-[50px] w-[160px] sm:h-[60px] sm:w-[180px] bg-white text-black font-bold">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
