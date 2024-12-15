import React from "react";


const Home = () => {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h2>Welcome to My Portfolio</h2>
          <div className="project-card">
            <img src="/code.jpeg" alt="Professional showcase" className="home-image" />
            <p>
              Explore my projects, contributions, and skills. Bringing ideas to
              life through technology and creativity.
            </p>
          </div>
        </section>

        {/* About Myself Section */}
        <section id="about" className="about">
          <h2>About Myself</h2>
          <div className="project-card">
            <img src="/photo.jpg" alt="About me" className="about-image" />
            <p>
              Hi, I am Mohit, a passionate full-stack developer with experience in
              building responsive web applications. I love collaborating with teams,
              solving complex problems, and delivering impactful solutions. When I’m
              not coding, I enjoy hiking, photography, and exploring new technologies.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 Portfolio Site | Designed by Me</p>
      </footer>
    </div>
  );
};

export default Home;
