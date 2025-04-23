import { projects } from './data';
import SectionTitle_xx from './SectionTitle_xx';
import ProjectCard_xx from './ProjectsCard_xx';

const Projects_xx = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle_xx text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectCard_xx key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects_xx;
