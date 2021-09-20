import React from 'react';
import ImageOne from '../images/pic2.jpeg';
import ImageTwo from '../images/cover.jpeg';

const Content = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center font-mono h-screen bg-white py-40'>
      <img src={ImageTwo} alt='pizza' className='h-full rounded mb-20 shadow' />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl mb-2'>Pan-Deep Dish Veggie And Meat-Lovers Pizza</h2>
        <p className='mb-2'>
          Crispy, Cheesy, Meaty, Full of Veggies Lover's Pizza
        </p>
        <span>S: $10.99</span>
        <span>M: $14.99</span>
        <span>L: $18.99</span>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center font-mono h-screen bg-white py-10'>
      <img src={ImageOne} alt='pizza' className='h-full rounded mb-20 shadow' />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl mb-2'>Heavenly Veggie And Meat-Lovers Pizza</h2>
        <p className='mb-2'>
          Crispy, Cheesy, Meaty, Full of Veggies Lover's Pizza
        </p>
        <span>S: $10.99</span>
        <span>M: $14.99</span>
        <span>L: $18.99</span>
      </div>
    </div>
    </>
  );
};

export default Content;
