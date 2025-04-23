'use client';
import Tour_xx from '@/components/mid1_xx/p2_xx/Tour_xx';
import { tours_xx } from '@/components/mid1_xx/p2_xx/tours_data_xx';
import Wrapper from '@/styles/wrappers/mid1_xx/Tours';

export default function Mid1P2Page_xx() {
  console.log('p2_xx: tours_xx', tours_xx);
  return (
    <Wrapper>
      <main>
        <section>
          <div className='title text-emerald-700'>
            <h2 className='text-2xl'>p2_xx: Our Tours (json arrays)</h2>
            <h2 className='text-xl'>YU, 912410023</h2>
            <div className='underline mt-4'></div>
          </div>
          {tours_xx?.map((tour) => {
            const { id, img, name, price, info } = tour;
            return (
              <Tour_xx
                key={id}
                img={img}
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
