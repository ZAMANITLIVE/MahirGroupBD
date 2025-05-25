'use client'
import { useI18n } from "@/app/contexts/i18n";
import { useCurrency } from "@/app/contexts/site"; // Custom hook to access currency data (e.g., symbol like $, €, etc.)
import { columnFormatter } from "@/app/helper/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductCard4 = ({ data }) => {
   const i18n = useI18n();
   const { currency_symbol } = useCurrency(); // Get the currency symbol from context

   return (
      <div className="bg-[#FFF] group rounded-[10px] border border-[#E8EAE8] xl:p-6 lg:p-5 p-4">
         <Image
            src={data?.thumb_image}
            width={500}
            height={500}
            alt="Image"
            className="w-full h-[250px] md:w-[384px] md:h-[310px] rounded-[20px] object-cover group-hover:scale-105 transform duration-300"
         />
         {/* <h3 className="description-2 text-[#000000] lg:mt-6 md:mt-5 mt-4">{columnFormatter(data?.category?.name)}</h3> */}
         {/* <p className="heading-4 text-[#333] mt-1">{data?.name}</p> */}
         
         <div className="flex justify-between items-center lg:mt-5 md:mt-4 mt-3">
            {/* 
            // Price and currency section commented out
            <p className="heading-5 text-primary">
               {currency_symbol} {data?.price?.amount}
            </p> 
            */}

            <Link href={`/project/${data?._id}`} className="flex items-center justify-center gap-2 common-btn bg-[#F4A434] group-hover:bg-[#000000] border border-primary/40 transform duration-300">
               <p className="description-1 transform text-white">{i18n.t("View Details")}</p>
               <FaArrowRightLong className="text-white transform duration-300" />
            </Link>
         </div>
      </div>
   );
}
export default ProductCard4
