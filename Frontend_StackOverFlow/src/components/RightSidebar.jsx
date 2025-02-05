const RightSidebar = ({ overflowBlogs, hotMetaPosts }) => {
  return (
    <>
      {/* Right Sidebar */}
      <aside className="sidebar right">
        {/* Overflow Blog Section */}
        <div className="widget">
          <h2>The Overflow Blog</h2>
          <ul>
            {overflowBlogs.map((blog, index) => (
              <li key={index}>
                <span className="material-symbols-outlined">edit</span>{" "}
                {blog.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured & Meta Section */}
        <div className="widget">
          <h2>Featured & Meta</h2>
          <ul>
            <li>
              <img
                src="https://th.bing.com/th?id=OIP.Igvn9akU-KpKFGhR17vmbAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                alt="icon"
                style={{
                  marginRight: "8px",
                  height: "25px",
                  paddingTop: "15px",
                }}
              />
              Beta release of Collectives on Stack Overflow
            </li>
          </ul>
        </div>

        {/* Hot Meta Posts Section */}
        <div className="widget">
          <h2>Hot Meta Posts</h2>
          <ul>
            {hotMetaPosts.map((post, index) => (
              <li key={index}>
                {index + 1}. {post}
              </li>
            ))}
          </ul>
        </div>

        {/* Custom Filter Section */}
        <div className="widget" style={{ marginTop: "50px" }}>
          <h2>Custom Filters</h2>
          <div style={{ paddingRight: "10px" }}>
            <input
              type="text"
              placeholder="Search filter..."
              style={{
                width: "100%",
                padding: "0.5rem",
                color:"blue",
                border: "1px solid #ddd",
                borderRadius: "4px",
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
