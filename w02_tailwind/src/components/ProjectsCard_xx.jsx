import {TbWorldWww} from 'react-icons/tb'
import {FaGithub,FaXTwitter,FaSquareFacebook} from 'react-icons/fa6'
const ProjectsCard_xx = ({id,img,icon,url,github,title,text}) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-400'>
      <img src={img} className='w-full object-cover h-64 rounded-t-lg' ></img>
      <div className='capitalize p-8 tracing-wider font-medium'>
        <h2 className='text-xl'>{title}</h2>
        <p className='text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a src={url} ><TbWorldWww className='h-8 w-8  text-slate-500 hover:text-block duration-400 ' /></a>
          <a src={url} ><FaGithub className='h-8 w-8  text-slate-500 hover:text-block duration-400 '/></a>
        </div>
      </div>

    </article>
  );
};
export default ProjectsCard_xx;
