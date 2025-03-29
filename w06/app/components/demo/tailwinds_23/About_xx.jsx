import aboutSvg from '../assets/about.svg';
import SectionTitle_xx from './SectionTitle_xx'

const About_xx = () => {
  return (
    <section className='bg-white py-20' id='about' >
      <div className='my-btn grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64'></img>
        <article>
          <SectionTitle_xx text='code and cafe' />
          <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum id debitis! Eos accusantium, facilis unde omnis dolor voluptatum nam sit accusamus quod sed maiores suscipit veniam expedita similique quaerat!</p>
        </article>
      </div>
    </section>
   
  );
};
export default About_xx;
