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
          image: data.includes.Asset[0].fields.file.url,
          // tengo que quitar la 4ta card //
        };
      });
      return fieldscollections;
    });
}

// función para que los asset coinciddan con los Id

// function getContentWithAssets(content) {
//   const assets = content.includes.Asset;

//   return content.items.map((item) => {
//     const asset = assets.find(
//       (assetItem) => assetItem.sys.id === item.fields.imagen.sys.id
//     );

//     return {
//       itemFields: item.fields,
//       assetsFields: asset.fields,
//     };
//   });
// }

function componenteCard(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="home__seccion-tres">
  <h2 class="home__seccion-tres-title"> Mis <span> servicios </span></h2>
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

  el.appendChild(componentEl);
}
