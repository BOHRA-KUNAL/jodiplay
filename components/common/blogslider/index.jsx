import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Image from "next/image";
import ApiClient from "@/api/apiClient";

export default function BlogSlider() {
  const [allBlogs, setAllBlogs] = useState();

  const fetChImages = () => {
    ApiClient.getAllBlogs({
      app_key: "@34@Y#456)D9)(JE4dsj36f$%#(jodiplay!com)8fe8345*&^ef8ef8",
    })
      .then((res) => {
        console.log("response---", res);
        setAllBlogs(res?.data?.result);
      })
      .catch((err) => {
        console.error("Error fetching slider images:", err);
      });
  };

  useEffect(() => {
    fetChImages();
  }, []);
  return (
    <>
      <div style={{ width: "100%" }}>
        {/* desktop view */}
        {console.log("len---.>>>", allBlogs?.length)}
        <div className="blogs_desktop_slider">
          {allBlogs?.length > 3 ? (
            <Swiper
              spaceBetween={30}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {allBlogs?.map((item, index) => (
                <div className="bg-white col-md-6 col-lg-4 bg-white rounded">
                  <SwiperSlide>
                    <div className="container w-full bg-white rounded">
                      <div className="d-flex flex-wrap ">
                        <div className="   " key={index}>
                          <a href={`/blog/${item.blog_url}`}>
                            <div className="d-flex-column  align-items-center m-3">
                              <div>
                                <a className="blog_parent">
                                  <div style={{ height: "100%" }}>
                                    <img src={item.blog_img} alt="" />
                                  </div>
                                </a>

                                <div className="pt-3">
                                  <h3>{item.blog_title}</h3>

                                  <span>{item.blog_short_desc.slice(2)}</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                  <div>
                                    <p>{item.publishedBy}</p>
                                  </div>
                                  <div>
                                    <p>{item.publishedAt}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          ) : (
            <div className="container w-full">
              <div className="d-flex justify-content-center ">
                {allBlogs?.map((item, index) => (
                  <div
                    className=" col-md-12 col-lg-4 m-2  bg-white rounded"
                    key={index}
                  >
                    <a href={`/blog/${item.blog_url}`}>
                      <div className="d-flex-column  align-items-center m-3">
                        <div>
                          <a className="blog_parent">
                            <div style={{ height: "200px", width: "100%" }}>
                              <img
                                src={item.blog_img}
                                alt=""
                                style={{ width: "100%", objectFit: "fill" }}
                              />
                            </div>
                          </a>

                          <div className="pt-3">
                            <h3>{item.blog_title}</h3>

                            <span>{item.blog_short_desc}</span>
                          </div>

                          <div className="d-flex justify-content-between mt-2">
                            <div>
                              <p>{item.publishedBy}</p>
                            </div>
                            <div>
                              <p>{item.publishedAt}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* mobile view */}
        <div className="blogs_mobile_slider">
          <Swiper
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {allBlogs?.map((item, index) => (
              <SwiperSlide>
                <div className="container w-full" key={index}>
                  <div className="d-flex flex-wrap ">
                    <div className=" col-md-12 col-lg-8  bg-white rounded">
                      <a href={`/blog/${item.blog_url}`}>
                        <div className="d-flex-column  align-items-center m-3">
                          <div>
                            <a className="blog_parent">
                              <div style={{ height: "100%" }}>
                                <img src={item.blog_img} alt="" />
                              </div>
                            </a>

                            {/* <div className='d-flex justify-content-between'>
                                <div>
                                    <p>Keyword Research</p>
                                </div>
                                <div>
                                    <span>6 min read</span>
                                </div>
                            </div> */}

                            <div className="pt-3">
                              <h3>{item.blog_title}</h3>

                              <span>{item.blog_short_desc}</span>
                            </div>

                            <div className="d-flex justify-content-between mt-2">
                              <div>
                                <p>{item.publishedBy}</p>
                              </div>
                              <div>
                                <p>{item.publishedAt}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
