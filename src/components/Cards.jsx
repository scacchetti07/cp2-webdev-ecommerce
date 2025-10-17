import React from 'react'
import { Link } from 'react-router-dom';
function Cards(props) {
  return (
    <Link
        to={`/product/${props.id}`}
        className={`text-center p-2 rounded-xl font-bold text-xl transition-colors duration-200 cursor-pointer`}
        state={{product: props}}
      >
      <article className='flex flex-col gap-2 p-8 w-xs rounded-2xl shadow-xl hover:scale-110 transform duration-400 h-140'>
        <img src={props.image} alt={props.title} className='h-65 w-65 m-auto' />
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <div className='border-t-2 p-2 space-y-2'>
          <p className='font-semibold'>Preço: R${props.price.toFixed(2)}</p>
        </div>
          More about
      </article>
    </Link>
  );
}

export default Cards;