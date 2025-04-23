'use client';
import Tour_xx from '@/components/mid1_xx/p4_xx/Tour_23';
import { tours_xx } from '@/components/mid1_xx/p2_xx/tours_data_xx';
import Wrapper from '@/styles/wrappers/mid1_xx/Tours';

export default  function TourList_xx({my_tours}) {
  console.log('p4_xx: tours_xx', JSON.stringify(my_tours));
  return (
    <Wrapper>
      <main>
        <section>
          <div className='title text-emerald-700'>
            <h2 className='text-2xl'>p4_23__________________supabase: Our Tours (supabase data)</h2>
            <h2 className='text-xl'>YU, 912410023</h2>
            <div className='underline mt-4'></div>
          </div>
          {my_tours?.map((tour) => {
            const { id, img,remote_img, name, price, info } = tour;
            return (
              <Tour_xx
                key={id}
                remote_img={remote_img}
                name={name}
                price={price}
                info={info}
              />
            );
          })}
        </section>
      </main>
    </Wrapper>
  );
}
