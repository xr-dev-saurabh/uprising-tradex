import React from 'react';

const Card = ({img, title, disc}) => {
  return (
    <div className="flex border p-5 max-w-2xl rounded-lg  gap-10 shadow-md">
      <img 
        src={img} 
        alt="" 
        className="aspect-square w-1/4 object-conatin rounded-lg "
      />
      <div className="pl-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold uppercase">{title}</h3>
          <p>{disc}</p>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg self-end mt-4 uppercase hover:bg-green-400 hover:tracking-widest transition-all duration-500">
          Enquery
        </button>
      </div>
    </div>
  );
}

export default Card;
