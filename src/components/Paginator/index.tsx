import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Paginator = () => {
  const [state, setState] = useState({
    page: 1,
    length: 5,
    results: 50,
    jump: 10,
  });

  const { page, length, results, jump } = state;

  const pageSelector =
    "flex items-center px-3 py-1 bg-gray-400 hover:bg-gray-300 cursor-pointer";

  const moveLeft = () => {
    setState({
      ...state,
      page: page > 1 ? page - 1 : 1,
    });
    console.log(page);
  };

  const moveRight = () => {
    setState({
      ...state,
      page: page < length ? page + 1 : length,
    });
    console.log(page);
  };

  return (
    <div className="flex flex-row items-center my-3">
      <p className="mr-3 text-blue-600">{`${results} results`}</p>
      <div className="flex flex-row select-none bg-gray-400 rounded">
        <div
          aria-hidden
          onClick={moveLeft}
          className={`${pageSelector} rounded-l`}
        >
          <IoMdArrowDropleft />
        </div>
        <div className="mx-2">{page}</div>
        <div
          aria-hidden
          onClick={moveRight}
          className={`${pageSelector} rounded-r`}
        >
          <IoMdArrowDropright />
        </div>
      </div>
      <p className="ml-3 text-blue-600">{`${jump} por pagina`}</p>
    </div>
  );
};

export default Paginator;
