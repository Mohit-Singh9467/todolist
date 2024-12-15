export default function Projects() {
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <img src="/ecom.png" alt="Project 1" className="project-image" />
          <h3>E-commerce Website</h3>
          <p>
            A full-stack e-commerce website with advanced features like payment
            gateway integration, product filters, and more.
          </p>
        </div>
        <div className="project-card">
          <img src="/fitness.jpg" alt="Project 2" className="project-image" />
          <h3>Fitness Tracker App</h3>
          <p>
            A mobile app to track fitness activities and connect with fitness
            enthusiasts worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
