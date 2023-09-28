const HeartFill = ({action}:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    onClick={action}
  >
    <path
      fillRule="evenodd"
      d="M12 20s-6.087-4.032-8.76-7.607c-1.385-1.718-1.784-4.466-.292-6.442 1.818-2.41 5.378-2.621 7.473-.445L12 7.146l1.58-1.64c2.094-2.176 5.654-1.964 7.472.445 1.492 1.976 1.093 4.724-.293 6.442C17.956 15.867 12 20 12 20z"
    />
  </svg>
);
export default HeartFill;
