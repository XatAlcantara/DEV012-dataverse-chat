
let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRouteElementValue) => {
  rootElement = newRouteElementValue;
};

export const setRoutes = (newRoutesValue) => {
  // Opcional: Lanzar errores si `newRoutesValue` no es un objeto
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/NotFound"]) {
      ROUTES = newRoutesValue;
    }
  }
};

const renderView = (pathname, props = {}) => {
  // Limpiar el elemento raíz
  const root = rootElement;
  root.innerHTML = "";
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") || "";

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname]({ ...props, id });
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/NotFound"](props));
  }
};

export const navigateTo = (pathname, props = {}) => {
  // Actualizar el historial del navegador con pushState
  let URLvisited = window.location.origin + pathname;
  if (props.id) {
    URLvisited += `?id=${props.id}`;
  }
  history.pushState({}, "", URLvisited);
  renderView(pathname, { ...props });
};

export const onURLChange = (location) => {
  // Analizar la ubicación para obtener la ruta y los parámetros de búsqueda
  // Convertir los parámetros de búsqueda a un objeto
  // Renderizar la vista con la ruta y el objeto
  renderView(location);
};
