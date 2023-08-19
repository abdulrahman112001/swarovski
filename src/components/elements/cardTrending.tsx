const CardTrending = ({ title, desc, image }) => {
  return (
    <>
      <div className='card-trending'>
        <div className='max-h-[535px] max-w-[401px]'>
          <img src={image} alt='trend1' />
        </div>
        <div className='mt-4'>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default CardTrending;
