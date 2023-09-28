/* eslint-disable @typescript-eslint/no-explicit-any */

const WishlistButton = ({ title, className, icon, hoverIcon , action }: any) => {
  return (
    <button
    onClick={action}
      className={` wishlist-button flex bg-transparent gap-2 border-[.1rem] border-[#222]  border-solid px-8 py-3 rounded-[.4rem] m-auto ${className}`}
    >
      <p> {title}</p>
      <i className=' icon-show flex w-[24px] h-[20px]'>{icon} </i>
      <i className=' icon-hide flex w-[24px]  h-[20px]'>{hoverIcon}</i>
    </button>
  );
};

export default WishlistButton;
