import { IData } from "@/repo/ContextDefault";
import { useEffect, useState } from "react";
import Image from "next/image";
import { resolve } from "path";

interface INombreColumnas {
  id: string;
  label: string;
}

interface ITable {
  data?: IData[];
}

const nombreColumnas: INombreColumnas[] = [
  {
    id: "nonbre_repo",
    label: "NOMBRE REPO",
  },
  {
    id: "nombre_owner",
    label: "NOMBRE",
  },
  {
    id: "imagen_avatar",
    label: "IMAGEN AVATAR",
  },
  {
    id: "fecha_Creacion/fecha_actualizacion",
    label: "FECHA CREACION/ACTUALIZACION",
  },
  {
    id: "topicos",
    label: "TOPICOS",
  },
  {
    id: "lenguajes",
    label: "LENGUAJES",
  },
  {
    id: "estrellas",
    label: "ESTRELLAS",
  },
];

const Tabla = ({ data }: ITable) => {
  const [list, setList] = useState<IData[] | undefined>(data);
  const [showList, setShowList] = useState<IData[] | undefined>();

  const goToRepo = (url: string) => {
    window.open(url);
  };

  const handleShowList = () => {
    let nuevoArreglo = list?.slice(0, 10);
    setShowList(nuevoArreglo);
  };

  useEffect(() => {
    setShowList(data);
    // setList(data);
    // handleShowList();
    // console.log(showList);
  }, [data]);

  return (
    <table className="table-auto w-3/4 text-center">
      <thead>
        <tr className="bg-gray-300 border-b border-gray-400 ">
          {nombreColumnas.map((columna, index) => {
            let bordeD = "border-r";
            if (index === nombreColumnas.length - 1) bordeD = "";
            return (
              <th
                className={`h-10 ${bordeD} border-gray-400 text-slate-500`}
                key={columna.id}
              >
                {columna.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        {showList?.map((item, index) => {
          const llave = `repo-${index}`;
          let bg = "";
          if (index % 2 === 0) bg = "bg-gray-50";

          return (
            <tr
              aria-hidden
              className={`${bg} border-b cursor-pointer border-gray-300 hover:bg-gray-300`}
              key={llave}
              onClick={() => goToRepo(item.url_repo)}
            >
              <td>{item.nombre_repo}</td>
              <td>{item.nombre_owner}</td>
              <td>
                <Image
                  src={item.imagen_avatar}
                  alt="avatar_image"
                  width={50}
                  height={50}
                  className="m-auto"
                />
              </td>
              <td>{`${item.fecha_creacion}/${item.fecha_actualizacion}`}</td>
              <td className="text-left pl-4 py-2">
                <div className="flex">
                  {item.topicos.map((item, index) => {
                    const llaveLi = `topico-${index}`;
                    return (
                      <span className="mr-1" key={llaveLi}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </td>
              <td>{item.lenguajes}</td>
              <td>{item.estrellas}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tabla;
