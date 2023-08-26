/* eslint-disable @typescript-eslint/no-explicit-any */
const MainButton = ({ title, className }: any) => {
  return (
    <button
      className={` border-[.1rem] border-[#222] bg-[#222] hover:bg-[#303030] text-white border-solid px-12 py-3 rounded-[.4rem] ${className}`}
    >
      {title}
    </button>
  );
};

export default MainButton;
