import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearRecetaAPI, editarRecetaAPI, obtenerRecetaUnica } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RecetasForm = ({ titulo, editar }) => {

  const {id} = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  useEffect(() => {
    if(editar){
      cargarRecetaUnica()
    }
  }, [])
  

  const cargarRecetaUnica = async () => {
    console.log(id)
   const respuesta = await obtenerRecetaUnica(id)
   if (respuesta.status === 200) {
     const recetaBuscada = await respuesta.json()
     setValue("nombreReceta", recetaBuscada.nombreReceta);
     setValue("descripcionBreve", recetaBuscada.descripcionBreve);
     setValue("duracion", recetaBuscada.duracion);
     setValue("ingredientes", recetaBuscada.ingredientes);
     setValue("preparacion", recetaBuscada.preparacion);
     setValue("porciones", recetaBuscada.porciones);
     setValue("imagen", recetaBuscada.imagen);
     setValue("autor", recetaBuscada.autor);
   }
  }

  const navegacion = useNavigate()

  const onSubmit = async (receta) => {
    if (editar) {
      const respuesta = await editarRecetaAPI(receta, id)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta Modificada",
          text: `La receta "${receta.nombreReceta}" fue modificada correctamente`,
          icon: "success",
        });

        navegacion("/administrador")
      }
      else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `La receta "${receta.nombreReceta}" no pudo ser creada, intentelo nuevamente dentro de unos minutos`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearRecetaAPI(receta);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta "${receta.nombreReceta}" fue creada correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La receta "${receta.nombreReceta}" no pudo ser creada, intentelo nuevamente dentro de unos minutos`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tortilla de papas"
            {...register("nombreReceta", {
              required: "Campo obligatorio",
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
              maxLength: {
                value: 350,
                message: "Máximo 350 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta && errors.nombreReceta.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción Breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Aprende a preparar esta receta de Tortilla de Papas Tradicional, por Estefanía Colombo en elGourmet"
            as="textarea"
            {...register("descripcionBreve", {
              required: "Campo obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
              maxLength: { value: 150, message: "Máximo 150 caracteres" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve && errors.descripcionBreve.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDuracion">
          <Form.Label>Duración*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 45'"
            {...register("duracion", {
              required: "Campo obligatorio",
              min: { value: 15, message: "Mínimo 15 minutos" },
              max: { value: 1000, message: "Máximo 1000 minutos" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.duracion && errors.duracion.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: papa, cebolla, huevo"
            {...register("ingredientes", {
              required: "Campo obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
              maxLength: { value: 200, message: "Máximo 150 caracteres" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes && errors.ingredientes.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPreparacion">
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: se debe hervir la papa, etc etc"
            as="textarea"
            {...register("preparacion", {
              required: "Campo obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
              maxLength: { value: 2000, message: "Máximo 2000 caracteres" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.preparacion && errors.preparacion.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPorciones">
          <Form.Label>Porciones*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 4"
            {...register("porciones", {
              required: "Campo obligatorio",
              min: { value: 1, message: "Mínimo 1" },
              max: { value: 10, message: "Máximo 10" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.porciones && errors.porciones.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_kvh73gs5ar_tortilla-1024x683.jpg"
            {...register("imagen", {
              required: "Campo obligatorio",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una url de imagen válida (png|jpg|jpeg|gif|png|svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen && errors.imagen.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAutor">
          <Form.Label>Autor*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lucia Barraza"
            {...register("autor", {
              required: "Campo obligatorio",
              minLength: { value: 10, message: "Mínimo 10 caracteres" },
              maxLength: { value: 200, message: "Máximo 150 caracteres" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.autor && errors.autor.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default RecetasForm;
