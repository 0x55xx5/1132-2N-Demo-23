import {projects,skills} from '../data'
import SectionTitle_xx from './SectionTitle_xx'
import ProjectsCard_xx from './ProjectsCard_xx';

const Projects_xx = () => {
  return (
    <section className='my-btn  py-20' id='projects'>
       <SectionTitle_xx text='web and app' />
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {
            projects.map((p)=>{
              const {id,img,github,title,text}=p;
                return <ProjectsCard_xx  key={id} {...p}  />;
            })

          }
        </div>
    </section>
  );
};
export default Projects_xx;
