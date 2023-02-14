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

  document.querySelector(".home__tittle").innerHTML = "Mis servicios";

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

  getWeb().then(function (works) {
    for (const w of works) {
      addWeb(w);
    }
  });
}
main();
