/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import { Image, Empty } from "antd";
import CommonBanner from "../../common/commonBanner";

const categoryTabs = [
  { id: "journey", name: "Our Journey" },
  { id: "factories", name: "Factories" },
  { id: "certifications", name: "Certifications" },
  { id: "sustainability", name: "Sustainability" },
  { id: "companies", name: "Our Companies" },
];

const imagesByCategory = {
  journey: [
    // Add image URLs here
    "",
    "",
  ],
  factories: [
    // Add image URLs here
    "",
    "",
  ],
  certifications: [
    // Add image URLs here
    "",
    "",
  ],
  sustainability: [
    // Add image URLs here
    "",
    "",
  ],
  companies: [
    // Add image URLs here
    "",
    "",
  ],
};

const ImageGalleryPage4 = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImages = imagesByCategory[activeTab] || [];

  return (
    <div className="overflow-x-hidden bg-white">
      <CommonBanner title="Image Gallery" textTitle="text-primary" />

      <div className="lg:py-[100px] md:py-20 sm:py-16 py-12 agency-container">
        <h3 className="text-xl font-semibold mb-4 text-center">Gallery Categories</h3>
        <div className="overflow-x-auto w-full pb-5 scrollbar-thin">
          <div className="flex items-center justify-start lg:justify-center gap-3 md:gap-4 lg:gap-6 w-max min-w-full">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`common-btn border border-primary whitespace-pre px-4 py-2 ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "text-black"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="2xl:mt-[60px] xl:mt-14 lg:mt-10 md:mt-8 sm:mt-7 mt-6 grid grid-cols-2 sm:grid-cols-3 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          {activeImages.length > 0 ? (
            activeImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg cursor-pointer overflow-hidden w-full aspect-[4/3] bg-gray-100"
                onClick={() => {
                  setCurrentIndex(index);
                  setPreviewVisible(true);
                }}
              >
                <Image
                  src={image}
                  alt={`${activeTab}-${index}`}
                  preview={false}
                  className="w-full h-full object-cover"
                  width="100%"
                  height="100%"
                />
              </div>
            ))
          ) : (
            <Empty description="No image found" />
          )}
        </div>

        {/* Image Preview Modal */}
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
                  alt={`${activeTab}-${index}`}
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

export default ImageGalleryPage4;
