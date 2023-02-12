import { ReactElement, useEffect, useState } from "react";
import DataContext, { IData } from "./ContextDefault";
import getData from "@/services/getData";

interface IDataProvider {
  children: ReactElement;
}

const DataProvider = ({ children }: IDataProvider) => {
  const [searchData, setSearchData] = useState<IData[]>([]);

  const searchRepositories = async (e: string) => {
    await getData(e)?.then((response) => {
      const miRespuesta = response;
      console.log(miRespuesta);
      if (miRespuesta?.data.items !== null) {
        seleccionarInformacion(miRespuesta.data.items);
      }
    });
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

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  return (
    <DataContext.Provider value={{ searchData, searchRepositories }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
