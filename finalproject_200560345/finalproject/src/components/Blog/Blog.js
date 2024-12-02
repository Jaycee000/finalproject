import React, { Fragment, useContext, useState } from "react";
import { Context } from "../../context/context";
import SectionContainer from "../../layouts/SectionContainer";
import BlogDetails from "./BlogDetails";

export default function Blog() {
  const blogDatas = [
    {
      id: 1,
      image: "images/blog/blog-1.jpg",
      date: "29 Nov 2024",
      title: "Learn how to use Apple Intelligence’s ‘Image Playground",
    },
    {
      id: 2,
      image: "images/blog/blog-2.jpg",
      date: "9 Nov 2021",
      title: "Microsoft at 50 Is an AI Giant—and Still Hellbent on Domination",
    },
   
  ];
  const { sectionToggle } = useContext(Context);
  const [blog, setBlog] = useState(null);
  const blogDetailsOpen = (blog) => {
    sectionToggle("blog-content");
    setBlog(blog);
  };
  return (
    <Fragment>
      <SectionContainer sectionName={"blog"}>
        <div id="blog-content">
          {/* Heading Starts */}
          <div className="heading text-left text-md-center">
            <h2>
              latest <span>posts</span>
            </h2>
          </div>
          {/* Heading Ends */}
          {/* Latest Posts Starts */}
          <div className="container">
            <div className="row">
              {/* Single Post Starts */}
              {blogDatas.map((blog) => (
                <div className="col-12 post-container" key={blog.id}>
                  <div className="post-thumb">
                    <a
                      href="#"
                      onClick={() => blogDetailsOpen(blog)}
                      className="d-block"
                    >
                      <img
                        src={blog.image}
                        className="img-fluid"
                        alt="Blog Post"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-date d-none d-sm-flex">
                      {blog.date
                        .split(" ")
                        .map(
                          (date, i) => i !== 2 && <span key={i}>{date}</span>
                        )}
                    </div>
                    <div className="entry-header">
                      <a href="#" onClick={() => blogDetailsOpen(blog)}>
                        {blog.title}
                      </a>
                      <p>
                      Using Image Playground is fairly easy. Similar to other image generators, there’s a text input area where you can describe an image and allow the AI to create it for you, such as “a dog blowing out birthday candles on a cake.” 
                      If the results aren’t exactly what you wanted, you can adjust the results with more detailed descriptions or choose one of Apple’s recommendations. You’ll see several image options to swipe through and select.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Single Post Ends */}
            </div>
            {/* <div className="row">
          <div className="col-12 text-center">
            <a href="blog.html" className="btn main-btn allposts">
              <span>all posts</span>
            </a>
          </div>
        </div> */}
          </div>
          {/* Latest Posts Ends */}
        </div>
      </SectionContainer>
      <BlogDetails blog={blog} />
    </Fragment>
  );
}
