import { IData } from "@/repo/ContextDefault";
import Image from "next/image";

interface INombreColumnas {
  id: string;
  label: string;
}

interface ITable {
  data?: IData[];
}

export const nombreColumnas: INombreColumnas[] = [
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
  const showList = data;
  const goToRepo = (url: string) => {
    window.open(url);
  };

  // useEffect(() => {
  //   console.log(showList);
  //   setShowList(data);
  // }, [data]);

  return (
    <table className="table-fixed w-full text-center">
      <thead className="">
        <tr className="bg-gray-300 border-b border-gray-400 w-2 sticky top-0">
          {nombreColumnas.map((columna, index) => {
            let bordeD = "border-r";
            let customWidth = "";
            if (index === nombreColumnas.length - 1) bordeD = "";
            if (columna.id === "fecha_Creacion/fecha_actualizacion")
              customWidth = "w-2/6";
            if (columna.id === "estrellas") customWidth = "w-1/12";
            return (
              <th
                className={`h-10 ${bordeD} ${customWidth} border-gray-400 text-slate-500`}
                key={columna.id}
              >
                {columna.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-gray-100 overflow-hidden">
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
                <div className="flex flex-row flex-wrap">
                  {item.topicos.map((topic, index) => {
                    const topicLlave = `index- ${index}`;
                    return (
                      <i key={topicLlave} className="text-justify">
                        {topic}
                      </i>
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
