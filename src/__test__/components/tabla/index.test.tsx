import { Tabla } from "@/components";
import { IData } from "@/repo/ContextDefault";
import { render } from "@testing-library/react";

// const data = [
//   {
//     nombre_repo: "Repo test",
//     nombre_owner: "Nombre",
//     imagen_avatar: "test",
//     fecha_creacion: "12/02/2023",
//     fecha_actualizacion: "12/02/2023",
//     topicos: [],
//     lenguajes: "javascript",
//     estrellas: "67",
//   },
// ];

describe("Tabla Test", () => {
  test("Tabla", () => {
    const { container } = render(<Tabla />);
    expect(container).toBeVisible();
  });
});
