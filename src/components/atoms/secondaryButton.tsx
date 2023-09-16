/* eslint-disable @typescript-eslint/no-explicit-any */

const SecondaryButton = ({ title, className, action, icon }: any) => {
  return (
    <button
      onClick={action}
      className={`bg-transparent border-[.1rem] border-[#222] hover:bg-[#f5f5f5] border-solid px-12 py-3 rounded-[.4rem] ${className}`}
    >
      {title}
      {icon}
    </button>
  );
};

export default SecondaryButton;
