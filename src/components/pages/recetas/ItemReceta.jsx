import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, obtenerRecetasAPI } from "../../../helpers/queries";

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta receta?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada!",
            text: `La receta "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: "success",
          });
          const respuestaRecetas = await obtenerRecetasAPI();
          if (respuestaRecetas.status === 200) {
            const recetasRestantes = await respuestaRecetas.json();
            setRecetas(recetasRestantes);
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `Intenta está operación en unos minutos`,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{receta._id}</td>
      <td className="text-truncate nomReceta">{receta.nombreReceta}</td>
      <td>{receta.duracion}'</td>
      <td className="text-center">
        <Image src={receta.imagen} className="imgTabla"></Image>
      </td>
      <td>{receta.autor}</td>
      <td className="text-center">
        <Link
          to={`/administrador/editar/` + receta._id}
          className="btn btn-warning me-2 mb-2"
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-2 mb-2" onClick={borrarReceta}>
          <i className="bi bi-trash3"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
