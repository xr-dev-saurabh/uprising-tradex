import React from 'react';


const Cards = () => {
  return (
    <div>
        <h1 className='w-full flex justify-center text-3xl  font-bold text-black'>Why-us?</h1>
      
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-6'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              
              <h2 className='text-2xl font-bold text-center py-8'>Reliable</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We believe in building and maintaining long term relationships with all our clients.</p>
                  
              </div>
              
          </div>
          <div className='w-full shadow-xl bg-white-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              
              <h2 className='text-2xl font-bold text-center py-8'>Solutions</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We endeavour to offer best solutions to acquire your maximum satisfaction</p>
                  
              </div>
              
          </div>
          <div className='w-full shadow-xl bg-white-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              
              <h2 className='text-2xl font-bold text-center py-8'>Experience</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We have diverse team working in trending technologies like Artificial Intelligence, Deep learning, 3D modelling, UI/UX, Web development, etc.
</p>
                  
              </div>
              
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              
              <h2 className='text-2xl font-bold text-center py-8'>Affordable</h2>
              
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We provide best plus affordable services to our customers.</p>
                 
              </div>
              
          </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
