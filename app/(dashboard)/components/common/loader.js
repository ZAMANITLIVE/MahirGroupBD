"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InfinitySpin, RotatingLines } from "react-loader-spinner";

const MainLoader = () => {
   return (
      <div
         style={{ zIndex: 99999 }}
         className="left-0 w-full top-0 h-screen flex justify-center items-center bg-white"
         id="main-loader"
      >
         <Loader />
      </div>
   );
};
export default MainLoader;
export const LayoutLoader = () => {
   return (
      <div
         style={{ zIndex: 99999 }}
         className="left-0 w-full top-0 h-screen flex justify-center items-center bg-white"
         id="main-loader"
      >
         <div className="relative">
            <Image
               width={100}
               height={100}
               src="/theme4/main.gif"
               alt="loader"
               className="w-[100px] h-[100px]"
            />
         </div>
      </div>
   );
};

export const Loader = () => {
   return (
      <div className="inline-block">
         <div className="relative">
            <Image
               width={100}
               height={100}
               src="/theme4/spin.gif"
               alt="loader"
               className="w-[100px] h-[100px]"
            />
         </div>
      </div>
   );
};
export const showLoader = () => {
   setTimeout(() => {
      const loader = document.getElementById("main-loader");
      if (loader) {
         loader.classList.remove("hidden");
      } else {
         console.warn("Element with ID 'main-loader' not found. Ensure the component is mounted.");
      }
   }, 0);
};

export const hideLoader = () => {
   setTimeout(() => {
      const loader = document.getElementById("main-loader");
      if (loader) {
         loader.classList.add("hidden");
      } else {
         console.warn("Element with ID 'main-loader' not found. Ensure the component is mounted.");
      }
   }, 0);
};


export const RootLoader = ({ children }) => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Simulate a loading delay to ensure loader is visible
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         {loading ? (
            <div
               style={{ zIndex: 99999 }}
               className="left-0 w-full top-0 h-screen flex justify-center items-center bg-white"
               id="main-loader"
            >
               <Loader />
            </div>
         ) : (
            children
         )}
      </>
   );
};