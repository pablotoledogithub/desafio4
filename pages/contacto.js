function main() {
  const componentHeader = document.querySelector(".component-header");
  componenteHeader(componentHeader);

  const componentForm = document.querySelector(".component-form");
  componenteForm(componentForm);

  const componentFooter = document.querySelector(".component-footer");
  componenteFooter(componentFooter);

  const botonAbreVentanaEl = document.querySelector(".abre-ventana");
  const botonCierraVentanaEl = document.querySelector(
    ".ventana__cierra-ventana"
  );
  const ventanaEl = document.querySelector(".ventana");

  botonAbreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  botonCierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });

  // // botón para ir a Contacto //

  // const botonAbreContactoEl = document.querySelector(
  //   ".ventana__contenido-contacto"
  // );

  // botonAbreContactoEl.addEventListener("click", () => {});
}
main();
