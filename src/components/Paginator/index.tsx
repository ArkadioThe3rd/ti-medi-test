import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface IPaginador {
  lengthList: number;
  resultsList: number;
  jumpList: number;
  handler(e: number): void;
}

const Paginator = ({
  lengthList,
  resultsList,
  jumpList,
  handler,
}: IPaginador) => {
  // borrar estado y pasar los datos de una.
  const [page, setPage] = useState(1);

  const pageSelector =
    "flex items-center px-3 py-1 bg-gray-400 hover:bg-gray-300 cursor-pointer";

  const moveLeft = () => {
    let pagina: number = page;
    pagina = pagina > 1 ? pagina - 1 : 1;
    setPage(pagina);
    handler(pagina);
  };

  const moveRight = () => {
    let pagina: number = page;
    pagina = pagina < lengthList ? pagina + 1 : lengthList;
    setPage(pagina);
    handler(pagina);
  };

  return (
    <div className="flex flex-row items-center my-3">
      <p className="mr-3 text-blue-600">{`${resultsList} results`}</p>
      <div className="flex flex-row select-none bg-gray-400 rounded">
        <div
          role={"button"}
          onClick={moveLeft}
          className={`${pageSelector} rounded-l`}
        >
          <IoMdArrowDropleft />
        </div>
        <div className="mx-2">{page}</div>
        <div
          onClick={moveRight}
          role={"button"}
          className={`${pageSelector} rounded-r`}
        >
          <IoMdArrowDropright />
        </div>
      </div>
      <p className="ml-3 text-blue-600">{`${jumpList} por pagina`}</p>
    </div>
  );
};

export default Paginator;
