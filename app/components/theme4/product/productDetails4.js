/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import FormInput from '@/app/components/form/input';
import { Empty, Form, message, Modal, Radio, Rate } from 'antd';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import "swiper/css";
import { useParams, useRouter } from 'next/navigation';
import { createProductPayment, createProductReview, getAllOrders, getPublicProductReview, getPublicProjects, sentMessage } from '@/app/helper/backend';
import { useAction, useFetch } from '@/app/helper/hooks';
import { columnFormatter } from '@/app/helper/utils';
import { BiCategoryAlt } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbDiscountOff } from 'react-icons/tb';
import { useI18n } from '@/app/contexts/i18n';
// import { useCurrency } from '@/app/contexts/site';
import { useUser } from '@/app/contexts/user';
import Button from '@/app/(dashboard)/components/common/button';
import CommonBanner from '../../common/commonBanner';
import ProductReviewCard4 from '../../site/common/card/productReviewCard4';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const ProjectDetailsPage4 = () => {
  const { user } = useUser();
  const [order] = useFetch(getAllOrders, { limit: 1000 });
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const i18n = useI18n();
  // const { currency_symbol } = useCurrency();
  const [form] = Form.useForm();
  const [addReviewForm] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const params = useParams();
  const { _id } = params;
  const [data, getData] = useFetch(getPublicProjects, {}, false);

  useEffect(() => {
    getData({ _id: _id });
  }, [_id]);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(4);

  const handleSubmit = async (values) => {
    setLoading(true);
    await useAction(sentMessage, { body: values });
    form.resetFields();
    setLoading(false);
  };

  const [publicReviewData, getPublicReviewData] = useFetch(getPublicProductReview, {}, false);

  useEffect(() => {
    getPublicReviewData({ product: _id });
  }, [_id]);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    const isChecked = order?.docs?.some((order1) =>
      order1?.product?._id == _id
    );
    setCheck(isChecked);
  }, [order, _id]);

  const handleAddReview = async () => {
    const values = {
      rating: rating,
      comment: comment,
      product: _id,
    };
    await useAction(createProductReview, { body: values });
    getPublicReviewData({ product: _id });
    addReviewForm.resetFields();
  };

  const handlePayment = async () => {
    const values = {
      product: _id,
      method: paymentMethod,
    };
    const response = await createProductPayment({ body: values });

    if (response?.success) {
      if (response?.data?.url) {
        router.push(response.data.url);
        message.success(response.message);
      } else {
        message.error("Payment URL not received. Please try again.");
      }
      setIsModalOpen(false);
    } else {
      message.error(response?.errorMessage || "Payment failed.");
    }
  };

  const swiperRef = useRef(null);

  const Next = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const Previous = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className=''>
      <CommonBanner title="Product" link='/project' subtitle={data?.name} />
      <div className='lg:py-[100px] md:py-20 sm:py-16 py-12 agency-container'>
        <div className='flex justify-center'>
          <div className='w-full sm:w-[50%] lg:w-[60%] xl:w-[66%]'>
            <div className='w-full'>
              <div className='relative bg-[#FEF9E1] xl:p-10 lg:p-8 md:p-6 p-5 rounded-[10px] lg:rounded-[20px]'>
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  keyboard={{ enabled: true }}
                  mousewheel={true}
                  loop={true}
                  modules={[Keyboard, Mousewheel, Navigation]}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 1, spaceBetween: 12 },
                    640: { slidesPerView: 1, spaceBetween: 14 },
                    768: { slidesPerView: 1, spaceBetween: 16 },
                    1024: { slidesPerView: 1, spaceBetween: 24 },
                  }}
                  className="w-full"
                >
                  <SwiperSlide>
                    <div className="w-full">
                      {data?.thumb_image && (
                        <Image className='rounded-[10px] lg:rounded-[20px] w-full xl:h-[576px] lg:h-[420px] md:h-[350px] sm:h-[220px] h-[200px] object-fill' src={data?.thumb_image} width={1000} height={1000} alt="image" />
                      )}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full">
                      {data?.images?.[0] && (
                        <Image className='rounded-[10px] lg:rounded-[20px] w-full xl:h-[576px] lg:h-[420px] md:h-[350px] sm:h-[220px] h-[200px] object-fill' src={data?.images?.[0]} width={1000} height={1000} alt="image" />
                      )}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-full">
                      {data?.images?.[1] && (
                        <Image className='rounded-[10px] lg:rounded-[20px] w-full xl:h-[576px] lg:h-[420px] md:h-[350px] sm:h-[220px] h-[200px] object-fill' src={data?.images?.[1]} width={1000} height={1000} alt="image" />
                      )}
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="absolute inset-0 flex items-center justify-between px-4 z-50 pointer-events-none">
                  <button
                    onClick={Previous}
                    className="bg-[#F4A434] hover:bg-[#FEF9E1] transform duration-300 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-md pointer-events-auto"
                  >
                    <GoArrowLeft size={20} />
                  </button>
                  <button
                    onClick={Next}
                    className="bg-[#F4A434] hover:bg-[#FEF9E1] transform duration-300 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-md pointer-events-auto"
                  >
                    <GoArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            <h2 className='xl:mt-10 lg:mt-8 md:mt-6 mt-5 heading-2 !font-lexend text-[#333333]'>{data?.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: columnFormatter(data?.description) }} className='lg:mt-6 md:mt-5 mt-4 description-2 text-[#000000] font-normal leading-6' />
          </div>

          {/*
          <div className='mt-5 sm:mt-0 w-full sm:w-[50%] lg:w-[40%] xl:w-[34%]'>
            <div className='bg-[#FEF9E1] rounded-[10px] lg:rounded-[20px] xl:p-10 lg:p-8 md:p-7 sm:p-6 p-5'>
              <div className='flex items-center gap-3 border-b border-[#000000] py-5'>
                <div className='bg-[#A6F4CC] h-14 w-14 rounded-full flex items-center justify-center'>
                  <RiMoneyDollarCircleLine className='text-[#333] p-1 text-4xl ' />
                </div>
              </div>
            </div>
          </div>
          */}

        </div>
      </div>

      <Modal
        title="Select Payment Method"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Radio.Group
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
          className="flex flex-col gap-3"
        >
          <Radio value="stripe">Stripe</Radio>
          <Radio value="paypal">PayPal</Radio>
          <Radio value="razorpay">Razorpay</Radio>
        </Radio.Group>
        <button className="xl:mt-8 lg:mt-6 mt-5 w-full bg-[#14634E] text-white common-btn"
          onClick={handlePayment}>
          {i18n.t('Pay Now')}
        </button>
      </Modal>
    </div>
  );
};

export default ProjectDetailsPage4;
