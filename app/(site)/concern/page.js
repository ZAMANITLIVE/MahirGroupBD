"use client";
import MainLoader from "@/app/(dashboard)/components/common/loader";
import { fetchPageContentTheme1 } from "@/app/helper/backend";
import { useFetch } from "@/app/helper/hooks";
import { useEffect } from "react";
import ConcernSection from "@/app/components/home4/ConcernSection";



const Concern = () => {
  return (
    
    <div className="p-4">
      <MainLoader></MainLoader>
      <ConcernSection></ConcernSection>
    </div>
  );
};

export default Concern;
