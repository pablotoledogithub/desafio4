function componenteHeader(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = ` 
  <header class="home__cont-header">
  <div class="home__logo">
    <img src="./imegenes/logo.png" alt="logo" />
  </div>
 <div class="home__hamburg-desplegada">
    <a class="home__portfolio">Portfolio</a>
    <a class="home__servicios">Servicios</a>
    <a class="home__contacto">Contacto</a>
  </div>
  <div class="ventana-hamburguesa">
  <button class="abre-ventana">&#9776;</button>
  <div class="ventana">
    <div class="ventana__contenedor-boton">
      <button class="ventana__cierra-ventana"> X </button>
    </div>
    <div class="ventana__contenido">
      <a href="./portfolio.html" class="ventana__contenido-portfolio">Portfolio</a>
      <a href="./servicios.html" class="ventana__contenido-servicios">Servicios</a>
      <a href="./contacto.html" class="ventana__contenido-contacto">Contacto</a>
       </div>
  </div>
</div> 
</header>`;
  el.appendChild(componentEl);
}
