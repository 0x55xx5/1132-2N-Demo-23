import heroImg from '../assets/hero.svg';
import {FaGithub,FaXTwitter,FaSquareFacebook} from 'react-icons/fa6'


const Hero_xx = () => {
  return (
    <section className='bg-emerald-100 py-20'>
      
      <div className='my-btn grid md:grid-cols-2 items-center gap-8 '>
        <article>
          <h1 className='text-3xl font-bold tracking-wider'>I am x5xx50005</h1>
          <p className='text-3xl mt-4 text-slate-700 capitalize tracking-wider'>  program manager</p>
          <p className='mt-2  text-slate-700 capitalize tracking-wider text-lg'> MS MVP & PMP</p>
          <div className='flex gap-x-1 mt-4 '>
          <a><FaGithub className='h-8 w-8 text-slate-500 hover:text-black duration:1700' /></a>
          <a><FaXTwitter className='h-8 w-8 text-slate-500 hover:text-black duration:1700' /></a>
          <a><FaSquareFacebook className='h-8 w-8 text-slate-500 hover:text-black duration:1700' /></a>
      
        </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-128'></img>
        </article>
       
      

      </div>
    </section>
  );
};
export default Hero_xx;
