function main() {
  const componentHeader = document.querySelector(".component-header");
  componenteHeader(componentHeader);

  const componentBienvenida = document.querySelector(".component-bienvenida");
  componenteBienvenida(componentBienvenida);

  const componentCard = document.querySelector(".component-card");
  componenteCard(componentCard);

  const componentForm = document.querySelector(".component-form");
  componenteForm(componentForm);

  const componentFooter = document.querySelector(".component-footer");
  componenteFooter(componentFooter);

  // Botón del header que abre y cierra la ventana desde la hamburguesa

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

  // data del contentful //

  // getWeb().then(function (works) {
  //   for (const w of works) {
  //     addWeb(w);
  //   }
  // });

  getWeb().then(function (works) {
    for (const w of works) {
      addWeb(w);
    }
  });
}

main();
