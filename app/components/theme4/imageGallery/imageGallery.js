"use client";
import Banner from "@/app/components/site/common/component/Banner";
import {
  getAllPublicServices,
  GetPublicServiceCategories,
} from "@/app/helper/backend";
import { useFetch } from "@/app/helper/hooks";
import { columnFormatter } from "@/app/helper/utils";
import { Empty, Image } from "antd";
import React, { useEffect, useState } from "react";

const ImageGalleryPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [services, getServices] = useFetch(getAllPublicServices, {
    fields: "banner_image",
  });
  const [categories] = useFetch(GetPublicServiceCategories);
  const activeImages = services?.docs?.map((item) => item?.banner_image) || [];

  useEffect(() => {
    getServices({});
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveTab(categoryId || "All");
    getServices(categoryId ? { category: categoryId } : {});
  };

  return (
    <div className="bg-[#0F172A] overflow-hidden">
      <Banner title="Image Gallery" />
      <div className="lg:py-[100px] md:py-20 sm:py-16 py-12 agency-container">
        
        {/* Category Tabs */}
        <div className="overflow-x-auto w-full pb-5 scrollbar-thin">
          <div className="flex items-center justify-start lg:justify-center gap-3 md:gap-4 lg:gap-6 w-max min-w-full">
            <button
              onClick={() => handleCategoryChange(undefined)}
              className={`common-btn border border-primary whitespace-pre px-4 py-2 ${
                activeTab === "All" ? "bg-primary text-black" : "text-[#000000]"
              }`}
            >
              Show All
            </button>
            {categories?.docs?.map((item) => (
              <button
                key={item?._id}
                onClick={() => handleCategoryChange(item?._id)}
                className={`common-btn border border-primary whitespace-pre px-4 py-2 ${
                  activeTab === item?._id
                    ? "bg-primary text-black"
                    : "text-[#000000]"
                }`}
              >
                {columnFormatter(item?.name)}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="2xl:mt-[60px] xl:mt-14 lg:mt-10 md:mt-8 sm:mt-7 mt-6 grid grid-cols-2 sm:grid-cols-3 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          {activeImages?.length > 0 ? (
            activeImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg cursor-pointer overflow-hidden w-full aspect-[4/3] bg-gray-100"
                onClick={() => {
                  setCurrentIndex(index);
                  setPreviewVisible(true);
                }}
              >
                {image && (
                  <Image
                    src={image}
                    alt={`Gallery ${index}`}
                    preview={false}
                    className="w-full h-full object-cover"
                    width="100%"
                    height="100%"
                  />
                )}
              </div>
            ))
          ) : (
            <Empty description="No image found" />
          )}
        </div>

        {/* Hidden Preview Group */}
        {previewVisible && (
          <div className="hidden">
            <Image.PreviewGroup
              preview={{
                visible: previewVisible,
                current: currentIndex,
                onVisibleChange: (visible) => setPreviewVisible(visible),
                onChange: (newIndex) => setCurrentIndex(newIndex),
              }}
            >
              {activeImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  width={800}
                  height={600}
                />
              ))}
            </Image.PreviewGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGalleryPage;
