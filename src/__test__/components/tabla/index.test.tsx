import { Tabla } from "@/components";
import { IData } from "@/repo/ContextDefault";
import { render } from "@testing-library/react";

const data: IData[] = [
  {
    nombre_repo: "Repo test",
    nombre_owner: "Nombre",
    imagen_avatar: "https://avatars.githubusercontent.com/u/5383506?v=4",
    fecha_creacion: "12/02/2023",
    fecha_actualizacion: "12/02/2023",
    topicos: [],
    lenguajes: "javascript",
    estrellas: "67",
    url_repo: "https://github.com/chvin/react-tetris",
  },
];

describe("Tabla Test", () => {
  test("Tabla", () => {
    const { container } = render(<Tabla data={data} />);
    expect(container).toBeVisible();
  });
});
