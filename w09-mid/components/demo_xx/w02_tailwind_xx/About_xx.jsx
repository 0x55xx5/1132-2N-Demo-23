import Image from 'next/image';
import SectionTitle_xx from './SectionTitle_xx';

const About_xx = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <div>
          <img
            src='/demo/tailwind_xx/about.svg'
            className='w-full h-64'
            alt=''
          />
        </div>

        <article>
          <SectionTitle_xx text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laboriosam iste corporis, hic deserunt totam quo explicabo
            praesentium nostrum provident fugit neque recusandae, sed labore
            nobis maiores enim non magnam est quia obcaecati illum impedit.
            Laudantium dolores nihil officia magni ducimus magnam explicabo
            libero optio quibusdam! Eius error eos laudantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About_xx;
