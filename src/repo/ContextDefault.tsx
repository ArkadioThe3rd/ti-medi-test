import React from "react";

export interface IData {
  nombre_owner: string;
  imagen_avatar: string;
  nombre_repo: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
  topicos: [];
  lenguajes: string;
  estrellas: string;
  url_repo: string;
}

interface IContext {
  searchData?: IData[];
  searchRepositories(e: string): void;
  isInvalid: boolean;
  noResults: boolean;
}

const context: IContext = {
  searchData: undefined,
  searchRepositories: () => {},
  isInvalid: false,
  noResults: false,
};

export default React.createContext(context);
