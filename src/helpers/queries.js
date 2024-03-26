const URI_Recetas = import.meta.env.VITE_API_RECETAS;

export const obtenerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URI_Recetas);
    return respuesta;
  } catch (error) {
    console.log("El error es", error);
  }
};

export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URI_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarRecetaAPI = async (receta, id) => {
  try {
    const respuesta = await fetch(`${URI_Recetas}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRecetaUnica = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Recetas}/${id}`);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log("El error es:", error);
  }
};

export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Recetas}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log("El error es:", error);
  }
};

export const iniciarSesion = (usuario) => {
  const userAdmin = {
    email: 'admin@rollingcoffee.com',
    password: '123Aa1233',
  };

  if (usuario.email === userAdmin.email && usuario.password === userAdmin.password) {
    sessionStorage.setItem('loginRollingCoffee', JSON.stringify(userAdmin));
    return true;
  } else {
    return false;
  }
};