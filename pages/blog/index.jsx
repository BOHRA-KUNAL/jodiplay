import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
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
    <div className="container">
      <div className="d-flex flex-wrap">
 
        {allBlogs?.map((item, index) => (
          <div className=" col-md-6 col-lg-4 " key={index}>
            <a href={`/blog/${item.blog_url}`}>
              <div className="d-flex-column  align-items-center m-3">
                <div>
                  <a className="blog_parent">
                    <div style={{ height: "100%" }}>
                      <img src={item.blog_img} alt=""  />
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
        ))}
       
      </div>
    </div>
  );
};

export default index;
