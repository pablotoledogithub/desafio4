function componenteFooter(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<section class="home__seccion-footer">
  <div class="home__footer-logo">
    <img src="./imegenes/logo.png" alt="mi logo" />
  </div>
  <div class="home__contact">
    <div class="home">
      <img src="./imegenes/home1.png" alt="home" />
      <label class="home__text-home" for="">Home</label>
    </div>
    <div class="servicios">
      <img src="./imegenes/contacto.png" alt="servicios" />
      <label class="home__text-serv" for="">Servicios</label>
    </div>
    <div class="contacto">
      <img src="./imegenes/telefono.png" alt="" />
      <label class="home__text-contact" for="">Contacto</label>
    </div>
  </div>
  <div class="home__redes">
    <div class="linkedin">
      <img src="./imegenes/linkedin.png" alt="" />
    </div>
    <div class="twitter">
      <img src="./imegenes/twitter2.png" alt="" />
    </div>
    <div class="github">
      <img src="./imegenes/github1.png" alt="" />
    </div>
  </div>
  <div class="home__copiright">
    <h4 class="home__coporight-text">&copy;2023-http//:apx.school</h4>
  </div>
</section> `;
  el.appendChild(componentEl);
}
