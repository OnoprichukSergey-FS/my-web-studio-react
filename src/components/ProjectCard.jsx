export default function ProjectCard({
  image,
  alt,
  type,
  title,
  description,
  tags,
  liveLink,
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={alt} />
      </div>

      <div className="project-content">
        <p className="project-type">{type}</p>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            View Project
          </a>

          <a href="/contact" className="btn btn-primary btn-sm">
            Request Similar
          </a>
        </div>
      </div>
    </article>
  );
}
