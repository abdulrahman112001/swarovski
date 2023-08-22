const CardTrending = ({ title, desc, image }: unknown) => {
  return (
    <>
      <div className='card-trending'>
        <div className='max-h-[640px] max-w-[480px]'>
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
