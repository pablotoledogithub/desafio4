function componenteCard(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<div class="home__container-madre">
  <div class="home__cont-1">
    <img
      src="./imegenes/compuvintage.png"
      alt="compu verde"
      class="home__compu1"
    />
    <h3 class="home__card-title">Desaroollo de páginas web</h3>
    <p class="home__card-parrafo">
      Creacion de paginas webs, totalmente responsive y mobile first.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
  <div class="home__cont-2">
    <img
      src="./imegenes/compuverde.png"
      alt="compu vintage"
      class="home__compu2"
    />
    <h3 class="home__card-title">Animaciones para web</h3>
    <p class="home__card-parrafo">
      Animaciones personalizadas con CSS , JS y Frameworks. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Aenean lobortis posuere
      tristique.
    </p>
  </div>
  <div class="home__cont-3">
    <img src="./imegenes/compuapp.png" alt="" class="home__compu3" />
    <h3 class="home__card-title">Desarrollo de apps</h3>
    <p class="home__card-parrafo">
      Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales
      vehicula velit. Aenean lobortis posuere tristique.
    </p>
  </div>
`;
  el.appendChild(componentEl);
}
