'use client';

const Tour_xx = ({ img, name, price, info }) => {
  return (
    <article className='single-tour'>
      <img src={img} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {info} ...
          <button>read more</button>
        </p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  );
};

export default Tour_xx;
