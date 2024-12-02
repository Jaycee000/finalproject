import { useContext } from "react";
import { Context } from "../../context/context";
import SectionContainer from "../../layouts/SectionContainer";

const BlogDetails = ({ blog }) => {
  const { sectionToggle } = useContext(Context);
  return (
    <SectionContainer sectionName={"blog-content"}>
      {blog && (
        <div id="blog-content">
          <div className="container">
            <div className="row">
              <div className="col-12 post-container single-post-container">
                <a
                  href="#"
                  onClick={() => sectionToggle("blog")}
                  className="link-blog"
                >
                  <span className="material-icons">keyboard_arrow_left</span>{" "}
                  Back to Blog
                </a>

                <div className="meta d-inline-block">
                  <span>
                    <span className="material-icons">person</span> admin
                  </span>
                  <span className="date">
                    <span className="material-icons">date_range</span>{" "}
                    {blog.date}
                  </span>
                  <span>
                    <span className="material-icons">tag</span> html, css,
                    javascript
                  </span>
                </div>
                <img src={blog.image} className="img-fluid" alt="Blog Post" />
                <h2 href="blog-post.html">{blog.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum...
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};
export default BlogDetails;
