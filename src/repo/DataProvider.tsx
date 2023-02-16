import { ReactElement, useEffect, useState } from "react";
import DataContext, { IData } from "./ContextDefault";
import getData from "@/services/getData";

interface IDataProvider {
  children: ReactElement;
}

const DataProvider = ({ children }: IDataProvider) => {
  const [searchData, setSearchData] = useState<IData[]>([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const searchRepositories = async (e: string) => {
    if (e !== "") {
      setIsInvalid(false);
      await getData(e)?.then((response) => {
        const miRespuesta = response;
        console.log(miRespuesta);
        if (miRespuesta?.data.items !== null) {
          setNoResults(false);
          seleccionarInformacion(miRespuesta.data.items);
        }
        if (miRespuesta?.data.total_count === 0) {
          console.log("entro");
          setNoResults(true);
        }
      });
    } else {
      setIsInvalid(true);
    }
  };

  const seleccionarInformacion = (items: any) => {
    if (items != null) {
      const nuevoArreglo = items.map((item: any) => {
        const data: IData = {
          nombre_owner: item.owner.login,
          imagen_avatar: item.owner.avatar_url,
          nombre_repo: item.name,
          fecha_creacion: item.created_at,
          fecha_actualizacion: item.updated_at,
          topicos: item.topics,
          lenguajes: item.language,
          estrellas: item.stargazers_count,
          url_repo: item.html_url,
        };
        return data;
      });
      setSearchData(nuevoArreglo);
    }
  };

  return (
    <DataContext.Provider
      value={{ searchData, searchRepositories, isInvalid, noResults }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
