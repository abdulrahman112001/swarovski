const Search_IC = ({ width, height, fill }: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={width ? width : 24}
    height={height ? height : 24}
  >
    <path
      fillRule='evenodd'
      fill={fill ? fill : ''}
      d='M16.628 18.044a9.007 9.007 0 1 1 1.415-1.415L22 20.584 20.585 22l-3.957-3.956zm1.384-7.037a7.005 7.005 0 1 1-14.01 0 7.005 7.005 0 0 1 14.01 0z'
    />
  </svg>
);
export default Search_IC;
