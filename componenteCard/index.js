function addWeb(params = {}) {
  const templateCard = document.querySelector("#cards");
  const containerCard = document.querySelector(".home__container-madre");

  templateCard.content.querySelector(".home__card-title").textContent =
    params.title;
  templateCard.content.querySelector(".home__card-parrafo").textContent =
    params.description;
  templateCard.content.querySelector(".home__compu1").src = params.image;

  const clone = document.importNode(templateCard.content, true);
  containerCard.appendChild(clone);
}

function getWeb() {
  return fetch(
    "https://cdn.contentful.com/spaces/s8m98t3h4njq/environments/master/entries?access_token=S4KoDm5oeOz2TEKOr7SGideP_uT2I7F0Y5nPWWn2TKU&&content_type=web"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldscollections = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: data.includes.Asset[1].fields.file.url,

          // tengo que quitar la 4ta card //
        };
      });

      return fieldscollections;
    });
  // .then((data) => {
  //   const fieldEl = data.items.filter((item) => {
  //     return fieldEl.lenght[0];
  //   });

  // });
}

function componenteCard(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="home__seccion-tres">
  <h2 class="home__seccion-tres-title"> Mis <span> servicios</span></h2>
  <div class="home__container-madre">
  
  <template id="cards">
  <div class="home__cont-1">
    <img
      src="./imegenes/compuvintage.png"
      alt="compu verde"
      class="home__compu1"
    />
    <h3 class="home__card-title"></h3>
    <p class="home__card-parrafo"></p>
  </div>
 </template>
</div>
 </section>
 `;
  //  <div class="home__cont-2">
  //     <img
  //       src="./imegenes/compuverde.png"
  //       alt="compu vintage"
  //       class="home__compu2"
  //     />
  //     <h3 class="home__card-title">Animaciones para web</h3>
  //     <p class="home__card-parrafo">
  //       Animaciones personalizadas con CSS , JS y Frameworks. Lorem ipsum
  //       dolor sit amet, consectetur adipiscing elit. Aenean lobortis posuere
  //       tristique.
  //     </p>
  //   </div>
  //   <div class="home__cont-3">
  //     <img src="./imegenes/compuapp.png" alt="" class="home__compu3" />
  //     <h3 class="home__card-title">Desarrollo de apps</h3>
  //     <p class="home__card-parrafo">
  //       Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur
  //       adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales
  //       vehicula velit. Aenean lobortis posuere tristique.
  //     </p>
  //   </div>
  //   </div>
  el.appendChild(componentEl);
}
