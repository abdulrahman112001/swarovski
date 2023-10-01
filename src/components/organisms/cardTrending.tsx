const CardTrending = ({ title, desc, image }: any) => {
  return (
    <>
      <div className='card-trending'>
        <div className='max-h-[640px] max-w-[480px] sm-m:max-w-full'>
          <img src={image} alt='trend1' className='sm-m:w-full' />
        </div>
        <div className='mt-4'>
          <h3>{title}</h3>
          <p
                dangerouslySetInnerHTML={{
                  __html: desc?.slice(0, 40),
                }}
              ></p>
        </div>
      </div>
    </>
  );
};

export default CardTrending;
