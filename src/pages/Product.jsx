import React from 'react'
import { useLocation } from 'react-router-dom';


function Product() {
    const { state } = useLocation();
    const props = state.product;
    return (
        <article className='flex flex-col justify-center gap-2 p-8 w-full rounded-2xl shadow-xl hover:scale-103 transform duration-400 h-140'>
            <img src={props.image} alt={props.title} className='h-80 w-65 m-auto' />
            <h2 className='text-xl font-bold'>{props.title}</h2>
            <div className='border-t-2 p-2 space-y-2'>
                <p className='font-semibold'>{props.description}</p>
                <p className='font-semibold'>Preço: R${props.price.toFixed(2)}</p>
            </div>
        </article>
    )
}

export default Product