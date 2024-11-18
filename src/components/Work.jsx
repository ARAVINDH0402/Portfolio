/**
 * @copyright 2024 ARAVINDH
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: './images/login 3.jpg',
      title: 'Login Register form using MERN stack',
      tags: ['API', 'Development'],
      projectLink: 'https://github.com/ARAVINDH0402/Login-Register-using-MERN-stack'
    },
    {
      imgSrc: './images/portfolio thumbnail.jpg',
      title: 'My portfolio',
      tags: ['Web-design', 'Portfolio'],
      projectLink: 'https://github.com/ARAVINDH0402/Portfolio'
    },
  ];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        </div>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
                />
            ))}
        </div>
    </section>
  )
}

export default Work
